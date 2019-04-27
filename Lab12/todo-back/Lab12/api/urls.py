from django.urls import path
from api import views

urlpatterns = [
    path('tasks', views.tasksList_list),
    path('tasks/<int:pk>/', views.tasksList_detail),
    path('tasks/<int:pk>/list', views.tasksList_task),
]