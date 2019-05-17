from django.contrib import admin
from django.urls import path
from api import views
#from api.views import Task_lists, Get_task_list, Get_task_list_tasks, Get_task
from api.g_views import Task_List, Task_List_Detail, Task_List_Tasks, Task_Detail
urlpatterns = [
    path('task_lists/', Task_List.as_view()),
    path('task_lists/<int:pk>/', Task_List_Detail.as_view()),
    path('task_lists/<int:pk>/tasks/', Task_List_Tasks.as_view()),
    path('tasks/<int:pk>/', Task_Detail.as_view())
]
