FROM nginx

RUN mkdir /code
RUN mkdir /sock

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD ./config/nginx/uwsgi_params /etc/nginx/
ADD ./config/nginx/django.conf /etc/nginx/conf.d/default.conf