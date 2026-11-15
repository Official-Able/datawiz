from django.core.management.base import BaseCommand
from case_studies.models import CaseStudy


CANDIDATES = (
    ("risen", "RISEN", "Digital products", "An on-chain product ecosystem with a public website, administration tools, and a unified platform in development."),
    ("gahto", "GAhto", "Social impact", "A digital platform focused on anti-trafficking reporting and related public information."),
    ("diaspora-media", "Diaspora Media", "Media", "A publication platform spanning stories, profiles, history, and digital magazine content."),
    ("datawiz-mail-services", "Datawiz Mail Services", "Business software", "A campaign workspace for contacts, document-based personalization, and delivery operations."),
    ("lumora", "Lumora", "Education", "A learning and research workspace with reading, study, and assessment tools in development."),
)


class Command(BaseCommand):
    help = "Create unpublished portfolio drafts from known local project directories."

    def handle(self, *args, **options):
        created = 0
        for order, (slug, title, sector, summary) in enumerate(CANDIDATES, start=1):
            _, was_created = CaseStudy.objects.get_or_create(
                slug=slug,
                defaults={
                    "title": title,
                    "sector": sector,
                    "summary": summary,
                    "sort_order": order * 10,
                    "is_published": False,
                },
            )
            created += int(was_created)
        self.stdout.write(self.style.SUCCESS(f"Created {created} unpublished drafts."))
