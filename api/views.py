from django.contrib.auth import get_user_model
from rest_framework import viewsets, status, permissions
from rest_framework.decorators import action
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated
from rest_framework.response import Response

from api.mixins import DefaultMixin
from api.serializers import CourseSerializer, UserSerializer
from university.models import Course

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    permission_classes = (
        permissions.IsAuthenticated,
    )

    def list(self, request, *args, **kwargs):
        user = UserSerializer(self.request.user)
        return Response(data=user.data)


class CoursesViewSet(DefaultMixin, viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    permission_classes_by_action = {
        'list': [AllowAny],
        'create': [IsAdminUser],
        'put': [IsAdminUser],
        'patch': [IsAdminUser],
        'delete': [IsAdminUser],
        'enroll': [IsAuthenticated]
    }

    @action(detail=True, methods=['POST'], url_path='enroll', url_name='enroll')
    def enroll(self, request, *args, **kwargs):
        user = request.user
        course = self.get_object()

        course.enroll_student(user)
        return Response(status=status.HTTP_201_CREATED)
