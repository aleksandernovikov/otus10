from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, AllowAny

from api.mixins import DefaultMixin
from api.serializers import CourseSerializer
from university.models import Course


class ListCourses(DefaultMixin, viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    permission_classes_by_action = {
        'list': [AllowAny],
        'create': [IsAdminUser],
        'put': [IsAdminUser],
        'patch': [IsAdminUser],
        'delete': [IsAdminUser],
    }
