from django.contrib import admin
from django.urls import path
from api import views, g_views


urlpatterns = [
    path('cities', views.citys),
    path('basket/flowers', g_views.Basket_List.as_view()),
    path('packages', views.packageType),
    path('flowers', views.item_list),
    path('colors', views.color_list),
]
