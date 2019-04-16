from django.urls import path
from api import views

urlpatterns = [
    path('tasks_list', views.tasks_lists),
    path('tasks_list/<int:pk>/', views.tasks_detail),
    path('tasks_list/<int:pk>/tasks', views.tasklist_task),
    path('task_list', views.task_list),
]