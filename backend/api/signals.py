import logging

from django.conf import settings
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.utils import timezone

from .models import Lead

logger = logging.getLogger(__name__)


def send_lead_notification_email(lead):
    if lead.notification_sent_at is not None:
        return True

    message = (
        "New enquiry received from Datawizable website:\n\n"
        f"Name: {lead.name}\n"
        f"Email: {lead.email}\n"
        f"Company: {lead.company}\n"
        f"Industry: {lead.industry.name if lead.industry else 'N/A'}\n\n"
        f"Message:\n{lead.message}\n"
    )
    try:
        delivered = send_mail(
            f"New Enquiry from {lead.name}",
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.NOTIFICATION_EMAIL],
            fail_silently=False,
        )
        if delivered != 1:
            logger.error("Lead notification was not accepted for lead %s", lead.pk)
            return False
    except Exception:
        logger.exception("Lead notification failed for lead %s", lead.pk)
        return False

    sent_at = timezone.now()
    Lead.objects.filter(pk=lead.pk, notification_sent_at__isnull=True).update(notification_sent_at=sent_at)
    lead.notification_sent_at = sent_at
    return True


@receiver(post_save, sender=Lead)
def send_lead_notification(sender, instance, created, **kwargs):
    if created:
        send_lead_notification_email(instance)
