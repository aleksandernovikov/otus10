FROM python:3.7-slim

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
ADD . /code/
RUN apt update && apt upgrade -y
RUN apt install curl -y && curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt install nodejs -y && node -v
RUN pip install -r requirements.txt && cd ./frontend-react && npm i && npm run build
EXPOSE 8000
RUN ./manage.py runserver 0.0.0.0:8000


