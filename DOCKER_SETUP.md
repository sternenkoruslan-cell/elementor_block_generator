# DOCKER_SETUP

## Передумови

1. Переконайтеся, що у вас встановлені Docker та Docker Compose.
2. Скачайте репозиторій:
   ```bash
   git clone https://github.com/sternenkoruslan-cell/elementor_block_generator.git
   cd elementor_block_generator
   ```

## Швидке налаштування

1. Збираємо образ:
   ```bash
   docker-compose build
   ```
2. Запускаємо сервіси:
   ```bash
   docker-compose up -d
   ```

## Доступ до сервісів

Сервіси доступні через ваш браузер:
- **Управлінський інтерфейс**: `http://localhost:8080`

## Доступні команди

- **Запустити сервіси**: `docker-compose up`
- **Зупинити сервіси**: `docker-compose down`
- **Перевірити статус**:
  ```bash
  docker-compose ps
  ```

## Деталі конфігурації

Конфігураційні файли знаходяться в папці `config`. Ви можете налаштувати параметри, такі як порти, бази даних, тощо.

## Розділ вирішення проблем

- **Сервіс не стартує**: перевірте журнали помилок:
  ```bash
  docker-compose logs
  ```

- **Проблеми з портами**: перевірте, чи не зайняті порти, вказані в `docker-compose.yml`.

## Додаткові ресурси

- [Документація Docker](https://docs.docker.com)
- [Docker Compose](https://docs.docker.com/compose)

---

© 2026 Sternenkoruslan Cell.