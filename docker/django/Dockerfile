FROM python:3.7-slim

WORKDIR /code
ADD . /code/
#ADD ./docker/django/ /etc/

RUN mkdir /sock
RUN chmod -R 666 /sock

RUN apt-get update && apt-get install uwsgi uwsgi-plugin-python3  -y

#RUN apt update && apt install curl -y && curl -sL https://deb.nodesource.com/setup_14.x | bash -
#RUN apt install nodejs -y

RUN pip3 install -r requirements.txt
#RUN cd ./frontend-react && npm i && npm run build
#ENV DJANGO_SETTINGS_MODULE=otus10.prod_settings SECRET_KEY=5&dfefy@wl7pam#)%p!xbr(5_&nd6oh@0t)80sdfhkls-sdfqqw
#RUN python manage.py migrate
#RUN python manage.py loaddata start
#CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
#CMD ["uwsgi", "--ini", "/code/docker/configs/uwsgi.ini"]
