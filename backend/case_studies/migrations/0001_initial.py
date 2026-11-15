from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CaseStudy",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("title", models.CharField(max_length=180)),
                ("slug", models.SlugField(unique=True)),
                ("sector", models.CharField(max_length=120)),
                ("summary", models.TextField()),
                ("work_done", models.TextField(blank=True)),
                ("outcome", models.TextField(blank=True)),
                ("cover_image_url", models.URLField(blank=True)),
                ("project_url", models.URLField(blank=True)),
                ("is_published", models.BooleanField(default=False)),
                ("is_featured", models.BooleanField(default=False)),
                ("sort_order", models.PositiveIntegerField(default=0)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
            ],
            options={"verbose_name_plural": "Case studies", "ordering": ("sort_order", "title")},
        ),
    ]
