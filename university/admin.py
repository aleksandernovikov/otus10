from django.contrib import admin

from university.models import Course


@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    filter_horizontal = 'teachers',
