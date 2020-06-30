#FROM python:3.7-alpine
FROM python:3.7-slim

WORKDIR /app
ADD . /app/

RUN pip install -r requirements.txt
RUN ls -la && cd frontend-react && ls -la
#ENV DJANGO_SETTINGS_MODULE=otus10.prod_settings SECRET_KEY=5&dfefy@wl7pam#)%p!xbr(5_&nd6oh@0t)80sdfhkls-sdfqqw
#RUN python manage.py migrate
#RUN python manage.py loaddata start