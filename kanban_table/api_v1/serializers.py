from rest_framework import serializers
from webapp.models import Task


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('summary', 'description', 'due_date', 'status', 'time_planned')
