# Сделать страницу курсов и при ее загрузке получать данные из api с помощью fetch или axios или ajax

#### Цель: 
Сделать страницу курсов и при ее загрузке получать данные из api с помощью fetch или axios или ajax и выводить на страницу динамически

 
# Начальные действия

* переходим в корень проекта
* создаем/активируем виртуальное окружение (`sudo apt install python3-venv -y && python3 -m venv venv && source venv/bin/activate`)
* устанавливаем зависимости python `pip install -r requirements.txt`
* выполняем миграции БД `./manage.py migrate`
* загружаем фикстуры `loaddata start`
* запускаем бек часть `./manage.py runserver`
* переходим в папку frontend `cd frontend-react`
* устанавливаем зависимости nodejs `npm i`
* запускаем сборку фронта `npm run build`
* в браузере по адресу http://127.0.0.1:8000/ , тестируем функционал
* данные суперпользователя user:123


# Сделать главную страницу на react

#### Цели занятия:
создавать приложение на react

Создавать react-компоненты

Понять что такое компонентный подходи и зачем он нужен

Разобраться со структурой react-приложения

Понять как работает render

Разобраться с virtual DOM

# Сделать страницу курсов, одного курса и записи на курс на react
* Странца курсов
* Странца одного курса
* Странца записи на курс

# Написание unit-тестов для UI и back-end
для тестирования фронт части выполнить комманду

`cd ./frontend-react && npm run test`