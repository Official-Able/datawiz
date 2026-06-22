from django.db import models
from django.utils import timezone

class Consultation(models.Model):
    SERVICE_CHOICES = [
        ('DT', 'Digital Transformation'),
        ('BA', 'Business Automation'),
        ('AI', 'AI Integration'),
        ('CP', 'Custom Platforms'),
        ('DI', 'Decision Intelligence'),
        ('CB', 'Capacity Building'),
    ]

    full_name = models.CharField(max_length=200)
    email = models.EmailField()
    organization = models.CharField(max_length=200)
    service_interest = models.CharField(max_length=2, choices=SERVICE_CHOICES)
    country = models.CharField(max_length=100)
    timezone = models.CharField(max_length=100)
    preferred_date = models.DateField()
    preferred_time = models.TimeField()
    challenge_description = models.TextField(help_text="What is slowing your organization down?")

    created_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, default='pending', choices=[
        ('pending', 'Pending'),
        ('confirmed', 'Confirmed'),
        ('completed', 'Completed'),
        ('cancelled', 'Cancelled'),
    ])

    def __str__(self):
        return f"{self.full_name} - {self.preferred_date}"
