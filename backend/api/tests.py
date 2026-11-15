from django.test import TestCase
from django.core import mail
from django.test import override_settings
from unittest.mock import patch
from .models import Lead
from .signals import send_lead_notification_email

@override_settings(EMAIL_BACKEND='django.core.mail.backends.locmem.EmailBackend')
class ConsultationBookingTest(TestCase):
    def test_end_to_end_booking_and_email(self):
        # 1. Simulate a consultation booking (Lead creation)
        lead_data = {
            "name": "Live Test User",
            "email": "test@example.com",
            "company": "Test Organization",
            "message": "This is a live end-to-end test of the consultation booking system."
        }

        # This will trigger the post_save signal in api/signals.py
        lead = Lead.objects.create(**lead_data)

        # 2. Check if an email was sent
        self.assertEqual(len(mail.outbox), 1)
        self.assertIn("New Enquiry from Live Test User", mail.outbox[0].subject)
        self.assertEqual(mail.outbox[0].to, ["info@datawizable.com"])
        self.assertIn("Test Organization", mail.outbox[0].body)
        self.assertIsNotNone(Lead.objects.get(pk=lead.pk).notification_sent_at)

    def test_failed_notification_can_be_retried_without_duplicate(self):
        with patch('api.signals.send_mail', side_effect=RuntimeError('mail unavailable')):
            lead = Lead.objects.create(
                name='Retry User', email='retry@example.com', message='Please contact me.'
            )

        self.assertIsNone(Lead.objects.get(pk=lead.pk).notification_sent_at)
        self.assertTrue(send_lead_notification_email(lead))
        self.assertIsNotNone(Lead.objects.get(pk=lead.pk).notification_sent_at)
        self.assertEqual(len(mail.outbox), 1)
        self.assertTrue(send_lead_notification_email(lead))
        self.assertEqual(len(mail.outbox), 1)
