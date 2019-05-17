from django.shortcuts import render
from django.http import JsonResponse
from api.models import TaskList, Task
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import TaskListSerializer, TaskSerializer
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from datetime import datetime

# Create your views here.

class Task_lists(APIView):
    def get(self, request):
        lists = TaskList.objects.all()
        serializer = TaskListSerializer(lists, many = True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TaskListSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

class Get_task_list(APIView):

    def get_task_list(self, pk):
        try:
            task_list = TaskList.objects.get(id = pk)
            return task_list
        except TaskList.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        task_list = self.get_task_list(pk)
        serializer = TaskListSerializer(task_list)
        return Response(serializer.data)

    def put(self, request, pk):
        task_list = self.get_task_list(pk)
        serializer = TaskListSerializer(instance = task_list, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        task_list = self.get_task_list(pk)
        task_list.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)

class Get_task_list_tasks(APIView):

    def get_task_lists(self, pk):
        try:
            tasks = Task.objects.filter(task_list = pk)
            return tasks
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        tasks = self.get_task_lists(pk)
        serializer = TaskSerializer(tasks, many = True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = TaskSerializer(data = request.data)
        task_list = TaskList.objects.get(id = pk)
        if serializer.is_valid():
            serializer.save(task_list = task_list)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

class Get_task(APIView):
    def get_task(self, pk):
        try:
            task = Task.objects.get(id = pk)
            return task
        except Task.DoesNotExist:
            raise Http404
    def get(self, request, pk):
        task = self.get_task(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, pk):
        task = self.get_task(pk)
        serializer = TaskSerializer(instance = task, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(status = status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        task = self.get_task(pk)
        task.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)






