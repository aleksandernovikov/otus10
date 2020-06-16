import datetime

import factory
from django.contrib.auth import get_user_model

from university.models import Course, CourseStudent


def ru_faker(*args, **kwargs):
    return factory.Faker(*args, **kwargs, locale='ru_RU')


User = get_user_model()


class UserFactory(factory.DjangoModelFactory):
    class Meta:
        model = User

    username = ru_faker('user_name')
    first_name = ru_faker('first_name')
    last_name = ru_faker('last_name')
    email = ru_faker('email')
    password = ru_faker('password')


class CourseFactory(factory.DjangoModelFactory):
    class Meta:
        model = Course

    title = ru_faker('word')

    @factory.post_generation
    def teachers(self, create, teachers, *args, **kwargs):
        if create:
            if not teachers:
                teachers_count = kwargs.get('teachers_count', 1)
                teachers = [UserFactory() for i in range(teachers_count)]
            for teacher in teachers:
                self.teachers.add(teacher)


class CourseStudentFactory(factory.DjangoModelFactory):
    class Meta:
        model = CourseStudent

    student = factory.SubFactory(UserFactory)
    course = factory.SubFactory(CourseFactory)
    course_entry_date = factory.LazyFunction(datetime.datetime.now)
