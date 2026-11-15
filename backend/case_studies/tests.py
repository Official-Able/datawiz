from datetime import timedelta

from django.core.exceptions import ValidationError
from django.test import TestCase
from django.utils import timezone

from .models import Campaign, CaseStudy


class CaseStudyApiTests(TestCase):
    def test_only_published_work_is_public(self):
        CaseStudy.objects.create(
            title="Public project", slug="public-project", sector="Education",
            summary="Public summary", is_published=True,
        )
        CaseStudy.objects.create(
            title="Draft project", slug="draft-project", sector="Media",
            summary="Private draft", is_published=False,
        )

        response = self.client.get("/api/case-studies/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual([item["slug"] for item in response.json()], ["public-project"])
        self.assertNotIn("is_published", response.json()[0])
        self.assertEqual(self.client.get("/api/case-studies/draft-project/").status_code, 404)

    def test_work_is_ordered_for_editorial_control(self):
        for title, order in (("Later", 20), ("First", 10)):
            CaseStudy.objects.create(
                title=title, slug=title.lower(), sector="Technology",
                summary="Summary", sort_order=order, is_published=True,
            )

        response = self.client.get("/api/case-studies/")

        self.assertEqual([item["slug"] for item in response.json()], ["first", "later"])


class CampaignApiTests(TestCase):
    def create_campaign(self, title, *, published=True, start_delta=-1, end_delta=1, placement="site_banner", priority=0):
        now = timezone.now()
        return Campaign.objects.create(
            title=title,
            message=f"{title} message",
            placement=placement,
            starts_at=now + timedelta(days=start_delta),
            ends_at=now + timedelta(days=end_delta),
            is_published=published,
            priority=priority,
        )

    def test_only_published_campaigns_inside_schedule_are_public(self):
        self.create_campaign("Active")
        self.create_campaign("Draft", published=False)
        self.create_campaign("Future", start_delta=2)
        self.create_campaign("Expired", end_delta=-1)

        response = self.client.get("/api/campaigns/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual([item["title"] for item in response.json()], ["Active"])

    def test_campaigns_are_ordered_by_priority(self):
        self.create_campaign("Standard", priority=1)
        self.create_campaign("Featured", priority=5)

        response = self.client.get("/api/campaigns/")

        self.assertEqual([item["title"] for item in response.json()], ["Featured", "Standard"])

    def test_campaign_requires_both_cta_fields_or_neither(self):
        campaign = self.create_campaign("Incomplete CTA")
        campaign.cta_label = "Learn more"

        with self.assertRaises(ValidationError):
            campaign.full_clean()

    def test_campaign_end_must_follow_start(self):
        campaign = self.create_campaign("Invalid schedule")
        campaign.ends_at = campaign.starts_at

        with self.assertRaises(ValidationError):
            campaign.full_clean()

# Create your tests here.
