React Docker App "ToDoList"
Простое React-приложение "список задач", запущенное в Docker-контейнере с использованием Nginx.

Запуск проекта
1. Сборка Docker-образа
docker build -t react-app:latest .

2. Запуск контейнера
docker run -d -p 8080:80 --name react-app-container react-app:latest

Открыть в браузере по адресу:
http://localhost:8080

Структура проекта
app/ — React-приложение
Dockerfile — сборка контейнера
nginx.conf — конфигурация nginx
.dockerignore — исключения файлов

Дополнительно
Проект использует:
- multi-stage Docker build
- nginx для раздачи статики