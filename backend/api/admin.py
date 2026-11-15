from django.contrib import admin
from django.contrib import messages
from .models import Industry, Service, Lead
from .signals import send_lead_notification_email

@admin.register(Industry)
class IndustryAdmin(admin.ModelAdmin):
    list_display = ('name', 'slug')
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'order')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(Lead)
class LeadAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'created_at', 'notification_sent_at', 'is_processed')
    list_filter = ('is_processed', 'notification_sent_at', 'industry', 'created_at')
    search_fields = ('name', 'email', 'company', 'message')
    readonly_fields = ('created_at', 'notification_sent_at')
    actions = ('retry_notifications',)

    @admin.action(description='Retry unsent email notifications')
    def retry_notifications(self, request, queryset):
        pending = queryset.filter(notification_sent_at__isnull=True)
        sent = sum(send_lead_notification_email(lead) for lead in pending.iterator())
        self.message_user(
            request,
            f'{sent} notification(s) sent; review remaining unsent enquiries.',
            messages.SUCCESS if sent else messages.WARNING,
        )
