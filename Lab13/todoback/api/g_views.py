from rest_framework import generics
from api.models import TaskList, Task
from api.serializers import TaskListSerializer, TaskSerializer
from rest_framework.permissions import IsAuthenticated

class Task_List(generics.ListCreateAPIView):
    serializer_class = TaskListSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return TaskList.objects.filter(created_by = self.request.user)

    def perform_create(self, serializer):
        serializer.save(created_by = self.request.user)

class Task_List_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer
    permission_classes = (IsAuthenticated, )

class Task_List_Tasks(generics.ListCreateAPIView):
    serializer_class = TaskSerializer
    permission_classes = (IsAuthenticated, )
    def get_queryset(self):
        tasks = Task.objects.filter(task_list=self.kwargs.get('pk'), created_by = self.request.user)
        return tasks

    def perform_create(self, serializer):
        task_list = TaskList.objects.get(id = self.kwargs.get('pk'))
        serializer.save(task_list = task_list, created_by = self.request.user)


class Task_Detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (IsAuthenticated, )





