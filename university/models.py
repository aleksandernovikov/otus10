import datetime

from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


class Course(models.Model):
    """
    Учебный курс
    """
    title = models.CharField('Course title', max_length=128)

    teachers = models.ManyToManyField(
        User,
        verbose_name='Teachers',
        related_name='courses',
        blank=True,
    )

    start_date = models.DateField('Сourse start date', default=datetime.date.today, blank=True, null=True)
    end_date = models.DateField('Course end date', blank=True, null=True)

    finished = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Course'
        verbose_name_plural = 'Courses'

    def __str__(self):
        return self.title
