from django.db import models


TASK_STATUS_CHOICES = [
    ('turn', 'Turn'),
    ('in_work', 'In_work'),
    ('done', 'Done')
]


class Task(models.Model):
    summary = models.TextField(max_length=100)
    description = models.TextField(max_length=2000, null=True, blank=True)
    due_date = models.DateTimeField()
    status = models.TextField(max_length=20, choices=TASK_STATUS_CHOICES, default='turn', verbose_name='Статус')
    time_planned = models.DecimalField(max_digits=2, decimal_places=1, null=True, blank=True)

    def __str__(self):
        return '%s' % self.summary
