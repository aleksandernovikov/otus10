from django.contrib.auth import get_user_model
from django.test import TestCase

from university.models import Course

User = get_user_model()


class TestCourse(TestCase):
    fixtures = ['start']

    def test_enroll_student(self):
        course = Course.objects.first()
        student = User.objects.first()

        course.enroll_student(student)

        self.assertIn(student, course.students.all())

