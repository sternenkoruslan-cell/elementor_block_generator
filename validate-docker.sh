#!/bin/bash

# Скрипт для валідації Docker конфігурації

echo "🔍 Перевірка Docker конфігурації..."
echo ""

# Перевіряємо наявність необхідних файлів
FILES=(
  "Dockerfile"
  "Dockerfile.dev"
  "docker-compose.yml"
  "docker-compose.dev.yml"
  ".dockerignore"
  "DOCKER_SETUP.md"
  "Makefile"
)

echo "📁 Перевірка наявності файлів:"
for file in "${FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file"
  else
    echo "❌ $file - НЕ ЗНАЙДЕНО"
  fi
done

echo ""
echo "📋 Перевірка структури docker-compose.yml:"

# Перевіряємо наявність ключових сервісів
if grep -q "services:" docker-compose.yml; then
  echo "✅ Секція services знайдена"
fi

if grep -q "mysql:" docker-compose.yml; then
  echo "✅ Сервіс mysql налаштований"
fi

if grep -q "app:" docker-compose.yml; then
  echo "✅ Сервіс app налаштований"
fi

if grep -q "volumes:" docker-compose.yml; then
  echo "✅ Volumes налаштовані"
fi

if grep -q "healthcheck:" docker-compose.yml; then
  echo "✅ Healthcheck для MySQL налаштований"
fi

echo ""
echo "🔧 Перевірка Dockerfile:"

if grep -q "FROM node:20-alpine" Dockerfile; then
  echo "✅ Використовується node:20-alpine"
fi

if grep -q "pnpm install" Dockerfile; then
  echo "✅ pnpm встановлення налаштоване"
fi

if grep -q "pnpm build" Dockerfile; then
  echo "✅ Build крок присутній"
fi

if grep -q "EXPOSE 3000" Dockerfile; then
  echo "✅ Порт 3000 експонується"
fi

echo ""
echo "📝 Перевірка змінних середовища:"

if grep -q "DATABASE_URL" docker-compose.yml; then
  echo "✅ DATABASE_URL налаштована"
fi

if grep -q "JWT_SECRET" docker-compose.yml; then
  echo "✅ JWT_SECRET налаштований"
fi

if grep -q "NODE_ENV" docker-compose.yml; then
  echo "✅ NODE_ENV налаштований"
fi

echo ""
echo "✨ Валідація завершена!"
echo ""
echo "📚 Для запуску Docker Compose виконайте:"
echo "   docker-compose up -d           # Production режим"
echo "   docker-compose -f docker-compose.dev.yml up  # Development режим"
echo ""
echo "📖 Детальніше див. у DOCKER_SETUP.md"
