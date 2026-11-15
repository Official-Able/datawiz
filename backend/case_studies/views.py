from django.utils import timezone
from rest_framework import viewsets
from .models import Campaign, CaseStudy
from .serializers import CampaignSerializer, CaseStudySerializer


class CaseStudyViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = CaseStudy.objects.filter(is_published=True)
    serializer_class = CaseStudySerializer
    lookup_field = "slug"


class CampaignViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CampaignSerializer
    pagination_class = None
    lookup_field = "pk"

    def get_queryset(self):
        now = timezone.now()
        return Campaign.objects.filter(
            is_published=True, starts_at__lte=now, ends_at__gt=now,
        ).order_by("-priority", "starts_at", "title")
