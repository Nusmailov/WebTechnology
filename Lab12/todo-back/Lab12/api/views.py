import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import Task, TaskList
from api.serializers import TaskListSerializer, TaskSerializer


@csrf_exempt
def taskList_list(request):
    if request.method == "GET":
        tasks = TaskList.objects.all()
        serializer = TaskListSerializer(tasks, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = TaskListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)


@csrf_exempt
def taskList_detail(request, pk):
    try:
        task = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = TaskListSerializer(task)
        return JsonResponse(serializer.data, status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = TaskListSerializer(instance=task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        task.delete()
        return JsonResponse({}, status=204)


@csrf_exempt
def task_list(request):
    if request.method == "GET":
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)


@csrf_exempt
def task_detail(request, pk):
    try:
        task = Task.objects.get(id=pk)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = TaskSerializer(task)
        return JsonResponse(serializer.data, status=200)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = TaskSerializer(instance=task, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors)
    elif request.method == 'DELETE':
        task.delete()
        return JsonResponse({}, status=204)


@csrf_exempt
def taskList_tasks(request, pk):
    try:
        taskList = Task.objects.filter(task_list__id=pk)
    except Task.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    json_products = [p.to_json() for p in taskList]

    if request.method == "GET":
        return JsonResponse(json_products, safe=False)

    elif request.method == "POST":
        print(request.body, 'Nurzhigit')
        data = json.loads(request.body)
        serializer = TaskSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, "error")
