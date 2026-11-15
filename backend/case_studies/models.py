from django.core.exceptions import ValidationError
from django.db import models


class CaseStudy(models.Model):
    title = models.CharField(max_length=180)
    slug = models.SlugField(unique=True)
    sector = models.CharField(max_length=120)
    summary = models.TextField()
    work_done = models.TextField(blank=True)
    outcome = models.TextField(blank=True)
    cover_image_url = models.URLField(blank=True)
    project_url = models.URLField(blank=True)
    is_published = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    sort_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("sort_order", "title")
        verbose_name_plural = "Case studies"

    def __str__(self):
        return self.title


class Campaign(models.Model):
    class Placement(models.TextChoices):
        SITE_BANNER = "site_banner", "Site-wide announcement banner"
        HOME_FEATURE = "home_feature", "Homepage feature"

    title = models.CharField(max_length=180)
    eyebrow = models.CharField(max_length=80, blank=True)
    message = models.TextField(max_length=500)
    image_url = models.URLField(blank=True)
    cta_label = models.CharField(max_length=60, blank=True)
    cta_url = models.URLField(blank=True)
    placement = models.CharField(max_length=24, choices=Placement.choices, default=Placement.SITE_BANNER)
    starts_at = models.DateTimeField(help_text="Enter the schedule in the configured Django timezone (currently UTC).")
    ends_at = models.DateTimeField(help_text="The campaign stops displaying at this time, in the configured Django timezone (currently UTC).")
    is_published = models.BooleanField(default=False)
    priority = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ("-priority", "starts_at", "title")
        verbose_name = "Campaign or announcement"
        verbose_name_plural = "Campaigns and announcements"

    def clean(self):
        super().clean()
        if self.starts_at and self.ends_at and self.ends_at <= self.starts_at:
            raise ValidationError({"ends_at": "End date and time must be after the start."})
        if bool(self.cta_label) != bool(self.cta_url):
            raise ValidationError("Add both a button label and a destination URL, or leave both blank.")

    def __str__(self):
        return self.title
