# Сделать страницу курсов и при ее загрузке получать данные из api с помощью fetch или axios или ajax

#### Цель: 
Сделать страницу курсов и при ее загрузке получать данные из api с помощью fetch или axios или ajax и выводить на страницу динамически

 
# Начальные действия

* переходим в корень проекта
* устанавливаем зависимости python `pip install -r requirements.txt`
* выполняем миграции БД `./manage.py migrate`
* загружаем фикстуры `loaddata start`
* запускаем бек часть `./manage.py runserver`
* переходим в папку frontend `cd frontend`
* устанавливаем зависимости nodejs `npm i`
* запускаем webpack-dev-server с проксированием на бек `npm run build`
* в браузере по адресу http://127.0.0.1:8000/ , тестируем функционал
* данные суперпользователя user:123