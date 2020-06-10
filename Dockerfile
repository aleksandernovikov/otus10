FROM python:3.7-slim

#ENV PYTHONUNBUFFERED 1

#RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN apt update
RUN apt install curl -y && curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y
RUN pip install -r requirements.txt
RUN cd ./frontend-react && npm i && npm run build
ENV DJANGO_SETTINGS_MODULE=otus10.prod_settings SECRET_KEY=5&dfefy@wl7pam#)%p!xbr(5_&nd6oh@0t)80sdfhkls-sdfqqw
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
