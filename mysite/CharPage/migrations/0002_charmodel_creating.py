# Generated by Django 4.2.1 on 2023-11-13 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CharPage', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='charmodel',
            name='creating',
            field=models.BooleanField(default=False, verbose_name='Персонаж создан?'),
        ),
    ]
