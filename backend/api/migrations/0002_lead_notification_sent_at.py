from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='notification_sent_at',
            field=models.DateTimeField(blank=True, editable=False, null=True),
        ),
    ]
