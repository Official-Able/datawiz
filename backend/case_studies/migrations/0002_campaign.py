from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [("case_studies", "0001_initial")]

    operations = [
        migrations.CreateModel(
            name="Campaign",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=180)),
                ("eyebrow", models.CharField(blank=True, max_length=80)),
                ("message", models.TextField(max_length=500)),
                ("image_url", models.URLField(blank=True)),
                ("cta_label", models.CharField(blank=True, max_length=60)),
                ("cta_url", models.URLField(blank=True)),
                ("placement", models.CharField(choices=[("site_banner", "Site-wide announcement banner"), ("home_feature", "Homepage feature")], default="site_banner", max_length=24)),
                ("starts_at", models.DateTimeField(help_text="Enter the schedule in the configured Django timezone (currently UTC).")),
                ("ends_at", models.DateTimeField(help_text="The campaign stops displaying at this time, in the configured Django timezone (currently UTC).")),
                ("is_published", models.BooleanField(default=False)),
                ("priority", models.PositiveIntegerField(default=0)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={
                "verbose_name": "Campaign or announcement",
                "verbose_name_plural": "Campaigns and announcements",
                "ordering": ("-priority", "starts_at", "title"),
            },
        ),
    ]
