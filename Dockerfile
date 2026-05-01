# ========== СТАДИЯ 1: СБОРКА ПРИЛОЖЕНИЯ ==========
FROM node:24.12.0-alpine3.23 AS builder
WORKDIR /app

COPY app/ /app

RUN npm ci && npm cache clean --force

RUN npm run build

# ========== СТАДИЯ 2: ПРОДАКШН-ОБРАЗ С NGINX ==========
FROM nginx:1.29.6-alpine-slim

# Копируем собранные файлы из стадии builder
COPY --from=builder /app/build /usr/share/nginx/html

# Копируем кастомную конфигурацию nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]