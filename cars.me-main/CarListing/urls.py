from django.urls import path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('car', views.CarViewSet, basename='car')

app_name = 'CarListing'

urlpatterns= [
]
urlpatterns += router.urls