from rest_framework import serializers
from webapp.models import Task


class TaskCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'summary', 'description', 'due_date', 'status', 'time_planned')


class TaskDisplaySerializer(TaskCreateSerializer):
    class Meta:
        model = Task
        fields = ('id', 'summary', 'description', 'due_date', 'status', 'time_planned')
