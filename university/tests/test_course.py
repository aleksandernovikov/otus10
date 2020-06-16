from django.test import TestCase

from university.models import Course
from .factories import CourseFactory, UserFactory


class TestCourse(TestCase):
    def test_create(self):
        course = CourseFactory()
        course_created = Course.objects.filter(title=course.title).exists()
        self.assertTrue(course_created)

    def test_delete(self):
        course = CourseFactory()
        course_id = course.id
        Course.objects.filter(pk=course_id).delete()
        self.assertFalse(Course.objects.filter(pk=course_id).exists())

    def test_update_title(self):
        course = CourseFactory()
        old_title = course.title
        course.title = old_title[::-1] * 2
        course.save(update_fields=('title',))
        course.refresh_from_db()
        self.assertNotEqual(course.title, old_title)

    def test_add_teacher(self):
        course = CourseFactory()
        teacher = UserFactory()
        course.teachers.add(teacher)
        self.assertIn(teacher, course.teachers.all())

    def test_remove_teacher(self):
        course = CourseFactory()
        teacher = course.teachers.first()
        course.teachers.remove(teacher)
        self.assertNotIn(teacher, course.teachers.all())

    def test_enroll_student(self):
        course = CourseFactory(finished=False)
        student = UserFactory()
        result = course.enroll_student(student)
        self.assertTrue(result)
        self.assertIn(student, course.students.all())

    def test_remove_student(self):
        course = CourseFactory(finished=False)
        student = UserFactory()
        result = course.enroll_student(student)
        self.assertTrue(result)
        course.students.remove(student)
        self.assertNotIn(student, course.students.all())
