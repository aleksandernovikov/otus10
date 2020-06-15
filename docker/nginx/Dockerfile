FROM nginx:stable-alpine

ENV TZ=Europe/Moscow
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

ADD ./docker/nginx/otus10.config /etc/nginx/conf.d/default.conf