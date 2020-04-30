from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from api.views import api_root, ListCourses

urlpatterns = format_suffix_patterns([
    path('', api_root),
    path('courses', ListCourses.as_view(), name='course-list'),
])
