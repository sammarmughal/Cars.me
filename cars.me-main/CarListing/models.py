from django.db import models
import datetime
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.

class Car(models.Model):
    """Stores the cars listed."""
    TRANSMISSION_CHOICES = [
        ('automatic', 'Automatic'),
        ('manual', 'Manual'),
    ]
    ENGINE_TYPE = [
        ('petrol','Petrol'),
        ('diesel','Diesel'),
        ('hybrid','Hybrid'),
        ('electric','Electric'),
    ]
    BODY_TYPE_CHOICES = [
        ('sedan', 'Sedan'),
        ('suv', 'SUV'),
        ('van', 'Van'),
    ]
    COLOR_CHOICES = [
        ('red', 'Red'),
        ('blue', 'Blue'),
        ('green', 'Green'),
        ('white', 'White'),
        ('black', 'Black'),
        ('gray', 'Gray'),   
    ]
    WARRENTY_CHOICES = [
        ('yes','Yes'),
        ('no','No'),
    ]
    car_name = models.CharField(max_length= 50)
    date_added = models.DateTimeField(auto_now_add= True)
    car_make = models.IntegerField(default=datetime.datetime.now().year)
    car_mileage = models.IntegerField(default=0)
    car_transmission = models.CharField(default ='automatic', max_length=10, choices=TRANSMISSION_CHOICES)
    car_engine_type = models.CharField(default='petrol', max_length=10, choices=ENGINE_TYPE)
    car_body_type = models.CharField(default='Sedan', max_length=20, choices=BODY_TYPE_CHOICES)
    car_seating_capacity = models.IntegerField(default = 4,validators=[MinValueValidator(2), MaxValueValidator(7)])
    car_engine_capacity = models.IntegerField(default=1500)
    car_number_of_cylinders = models.IntegerField(default=2, validators = [MinValueValidator(2), MaxValueValidator(16)])
    car_color = models.CharField(max_length=50,default='black', choices=COLOR_CHOICES )
    car_warrenty = models.CharField(max_length=50,default='Yes', choices= WARRENTY_CHOICES)
    car_description = models.TextField(null=True)
    car_rating = models.IntegerField(default=5, validators=[MinValueValidator(1), MaxValueValidator(10)])
    car_city = models.CharField(default='Dubai')
    
    def __str__(self):
        return self.car_name