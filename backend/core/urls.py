from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from api.views import IndustryViewSet, ServiceViewSet, LeadViewSet

router = DefaultRouter()
router.register(r'industries', IndustryViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'leads', LeadViewSet)

urlpatterns = [
    path('admin/', admin.site.admin_site.urls if hasattr(admin.site, 'admin_site') else admin.site.urls),
    path('api/', include(router.urls)),
]
