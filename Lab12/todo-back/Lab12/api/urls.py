from django.urls import path
from api import views

urlpatterns = [
    path('tasks', views.tasks_list),
    path('tasks/<int:pk>/', views.tasks_detail),
    path('tasks/<int:pk>/list', views.tasksList_task),
]