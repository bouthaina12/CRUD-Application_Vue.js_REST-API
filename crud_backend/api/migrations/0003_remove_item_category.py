# Generated by Django 5.1.3 on 2024-11-23 11:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_item_category'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='category',
        ),
    ]
