# Generated by Django 4.2.10 on 2024-02-12 14:18

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('CarListing', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='car',
            name='car_city',
            field=models.CharField(default='Dubai', max_length=30),
        ),
        migrations.AddField(
            model_name='car',
            name='car_power',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='car',
            name='car_price',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='car',
            name='car_rating',
            field=models.IntegerField(default=5, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(10)]),
        ),
    ]
