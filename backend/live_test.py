import os
import django

# Setup Django environment
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'core.settings')
django.setup()

from api.models import Lead

def trigger_live_test():
    print("🚀 Triggering live end-to-end email test...")

    # Create a test lead that looks like a real organizational challenge
    test_lead = Lead.objects.create(
        name="Executive Live Test",
        email="test-executive@datawizable.com",
        company="Datawizable Global Testing",
        message="This is a live end-to-end test of the Resend integration using the updates@updates.datawizable.com domain. Please confirm receipt at info@datawizable.com."
    )

    print(f"✅ Test Lead created successfully: ID {test_lead.id}")
    print("📧 The system should now be sending the notification email to info@datawizable.com via updates@updates.datawizable.com...")

if __name__ == "__main__":
    trigger_live_test()
