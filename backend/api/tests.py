from django.test import TestCase
from django.core import mail
from .models import Lead

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
        Lead.objects.create(**lead_data)

        # 2. Check if an email was sent
        self.assertEqual(len(mail.outbox), 1)
        self.assertIn("New Enquiry from Live Test User", mail.outbox[0].subject)
        self.assertEqual(mail.outbox[0].to, ["info@datawizable.com"])
        self.assertIn("Test Organization", mail.outbox[0].body)
