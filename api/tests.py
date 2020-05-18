from django.test import TestCase

from university.models import Course


class TestTokenAction(TestCase):
    fixtures = ['start']

    def test_get_jwt_tokens(self):
        response = self.client.post('/api/token/get/', {
            'username': 'user',
            'password': '123'
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        return response.data

    def test_refresh_jwt_tokens(self):
        tokens = self.test_get_jwt_tokens()
        refresh = tokens.get('refresh')
        response = self.client.post('/api/token/refresh/', {
            'refresh': refresh
        })
        self.assertEqual(response.status_code, 200)
        self.assertIn('access', response.data)
        return response.data.get('access')

    def test_course_create_after_login(self):
        tokens = self.test_get_jwt_tokens().get('access')
        auth_string = f'Bearer {tokens}'

        response = self.client.post('/api/courses/',
                                    {
                                        'title': 'new',
                                        'start_date': '17.05.2020',
                                        'end_date': '17.05.2020',
                                        'finished': False
                                    },
                                    HTTP_AUTHORIZATION=auth_string,
                                    format='json'
                                    )
        self.assertEqual(response.status_code, 201)

    def test_course_create_after_refresh(self):
        access_token = self.test_refresh_jwt_tokens()
        auth_string = f'Bearer {access_token}'

        response = self.client.post('/api/courses/',
                                    {
                                        'title': 'another one',
                                        'start_date': '17.05.2020',
                                        'end_date': '17.05.2020',
                                        'finished': False
                                    },
                                    HTTP_AUTHORIZATION=auth_string,
                                    format='json'
                                    )
        self.assertEqual(response.status_code, 201)

    def test_course_enroll(self):
        tokens = self.test_get_jwt_tokens().get('access')
        auth_string = f'Bearer {tokens}'
        course = Course.objects.first()

        response = self.client.post(
            f'/api/courses/{course.id}/enroll/',
            HTTP_AUTHORIZATION=auth_string,
            format='json'
        )
        self.assertEqual(response.status_code, 201)
