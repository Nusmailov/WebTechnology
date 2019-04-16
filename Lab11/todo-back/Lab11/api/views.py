from django.shortcuts import render
from django.http import JsonResponse
from api.models import TaskList
from api.models import Task
# Create your views here.


def tasks_lists(request):
    tasks = TaskList.objects.all()
    json_categories = [c.to_json() for c in tasks]
    return JsonResponse(json_categories, safe=False)


def tasks_detail(request, pk):
    try:
        task = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(task.to_json())


def tasklist_task(request,pk):
    try:
        taskList = Task.objects.filter(task_list__id=pk)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    json_products = [p.to_json() for p in taskList]
    return JsonResponse(json_products, safe=False)


def task_list(request):
    tasks = Task.objects.all()
    json_categories = [c.to_json() for c in tasks]
    return JsonResponse(json_categories, safe=False)