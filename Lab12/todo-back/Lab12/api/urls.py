from django.urls import path
from api import views

urlpatterns = [
    path('taskList', views.taskList_list),
    path('taskList/<int:pk>/', views.taskList_detail),
    path('taskList/<int:pk>/list', views.taskList_tasks),
    path('tasks', views.task_list),
    path('tasks/<int:pk>/', views.task_detail),

]