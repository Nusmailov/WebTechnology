from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class TaskList(models.Model):
    name = models.CharField(max_length = 300)
    created_by = models.ForeignKey(User, on_delete = models.CASCADE, default = 1)

    def __str__(self):
        return '{}'.format(self.name)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Task(models.Model):
    name = models.CharField(max_length = 300)
    created_at = models.DateTimeField(auto_now_add = True)
    due_on = models.DateField()
    status = models.CharField(max_length = 300)
    task_list = models.ForeignKey(TaskList, on_delete = models.CASCADE)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    def __str__(self):
        return '{}'.format(self.name)

    def to_json_for_c(self):
        return {
            'id': self.id,
            'name': self.name,
            'status': self.status,
        }

    def to_json_for_d(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status,
            'task_list': self.task_list.name,
        }



