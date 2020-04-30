from django.contrib.auth import get_user_model
from rest_framework import serializers

from university.models import Course

User = get_user_model()



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = 'first_name', 'last_name'


class CourseSerializer(serializers.ModelSerializer):
    teachers = UserSerializer(read_only=True, many=True)

    class Meta:
        model = Course
        fields = 'title', 'teachers', 'start_date', 'end_date', 'finished'
