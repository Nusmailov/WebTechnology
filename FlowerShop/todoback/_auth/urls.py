from django.urls import path
from _auth import views

urlpatterns = [
    path('login/', views.login),
    path('logout/', views.logout)
]