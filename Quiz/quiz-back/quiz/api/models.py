from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    title = models.CharField(max_length=200)
    body = models.TextField(max_length=200)
    like_count = models.IntegerField()
    created_at = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.id, self.title)

    def to_json(self):
        return {
            'id': self.id,
            'title': self.title,
            'created_at': self.created_at,
            'created_by': self.created_by,
            'like_count': self.like_count,
            'body': self.body,
        }