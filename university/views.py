from django.views import generic


class IndexPage(generic.TemplateView):
    template_name = 'university/index.html'
