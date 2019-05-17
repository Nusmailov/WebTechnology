from api.models import TaskList, Task
from rest_framework import serializers
from api.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', )

class TaskListSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    created_by = UserSerializer(read_only = True)

    def create(self, validated_data):
        task_list = TaskList(**validated_data)
        task_list.save()
        return task_list

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance


class TaskSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    created_at = serializers.DateTimeField(read_only = True)
    due_on = serializers.DateField()
    status = serializers.CharField()
    task_list = TaskListSerializer(read_only = True)
    created_by = UserSerializer(read_only = True)

    class Meta:
        model = Task
        fields = ('id', 'name', 'created_at', 'due_on', 'status', 'task_list', 'created_by')
