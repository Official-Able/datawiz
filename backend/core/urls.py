from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import IndustryViewSet, ServiceViewSet, LeadViewSet
from case_studies.views import CampaignViewSet, CaseStudyViewSet

admin.site.site_header = 'Datawizable Admin'
admin.site.site_title = 'Datawizable Admin'
admin.site.index_title = 'Content and enquiries'

router = DefaultRouter()
router.register(r'industries', IndustryViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'leads', LeadViewSet)
router.register(r'case-studies', CaseStudyViewSet, basename='case-study')
router.register(r'campaigns', CampaignViewSet, basename='campaign')

urlpatterns = [
    path('admin/', admin.site.admin_site.urls if hasattr(admin.site, 'admin_site') else admin.site.urls),
    path('api/', include(router.urls)),
]
