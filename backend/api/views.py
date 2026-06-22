from rest_framework import viewsets
from .models import Industry, Service, Lead
from .serializers import IndustrySerializer, ServiceSerializer, LeadSerializer

class IndustryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Industry.objects.all()
    serializer_class = IndustrySerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all().order_by('order')
    serializer_class = ServiceSerializer

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    serializer_class = LeadSerializer
    http_method_names = ['post'] # Only allow creating leads via public API
