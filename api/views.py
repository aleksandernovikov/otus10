from rest_framework import mixins, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.reverse import reverse

from api.serializers import CourseSerializer
from university.models import Course


@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'courses': reverse('course-list', request=request, format=format),
    })


class ListCourses(mixins.ListModelMixin,
                  generics.GenericAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
