from rest_framework import serializers
from .models import Campaign, CaseStudy


class CaseStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudy
        fields = (
            "title", "slug", "sector", "summary", "work_done", "outcome",
            "cover_image_url", "project_url", "is_featured",
        )


class CampaignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Campaign
        fields = ("title", "eyebrow", "message", "image_url", "cta_label", "cta_url", "placement")
