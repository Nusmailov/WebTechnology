from django.urls import path
from api import views,auth

urlpatterns = [
    path('posts', views.post_list),
    path('posts/<int:pk>/', views.post_detail),
    path('posts/<int:pk>/like/', views.post_detail),
    path('login/', auth.login),
    path('logout/', auth.logout),
]