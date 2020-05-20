from django.contrib.auth import get_user_model
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from university.models import Course

User = get_user_model()


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token.payload.update({
            'username': user.username,
            'firstName': user.first_name,
            'lastName': user.last_name
        })
        return token


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'username', 'first_name', 'last_name'


class CourseSerializer(serializers.ModelSerializer):
    teachers = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Course
        fields = 'id', 'title', 'teachers', 'start_date', 'end_date', 'finished'
