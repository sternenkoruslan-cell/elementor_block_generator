# Docker Setup для Elementor Block Generator

Цей документ описує, як запустити Elementor Block Generator використовуючи Docker Compose.

## 📋 Передумови

1. Встановіть [Docker](https://docs.docker.com/get-docker/) (версія 20.10+)
2. Встановіть [Docker Compose](https://docs.docker.com/compose/install/) (версія 2.0+)

Перевірте версії:
```bash
docker --version
docker-compose --version
```

## 🚀 Швидкий старт (Production)

### 1. Клонуйте репозиторій
```bash
git clone https://github.com/sternenkoruslan-cell/elementor_block_generator.git
cd elementor_block_generator
```

### 2. Налаштуйте змінні середовища (опціонально)
Відредагуйте змінні в `docker-compose.yml` за потреби:
- `JWT_SECRET` - змініть на безпечний випадковий ключ для production
- `MYSQL_ROOT_PASSWORD` - змініть пароль root MySQL
- `MYSQL_PASSWORD` - змініть пароль користувача БД

### 3. Запустіть контейнери
```bash
docker-compose up -d
```

Ця команда:
- Завантажить образ MySQL 8.0
- Збере Docker образ застосунку
- Запустить БД та застосунок у фоновому режимі
- Автоматично виконає міграції БД

### 4. Перевірте статус
```bash
docker-compose ps
```

Ви повинні побачити два запущені контейнери:
- `elementor_mysql` - база даних MySQL
- `elementor_app` - Node.js застосунок

### 5. Відкрийте в браузері
Відкрийте [http://localhost:3000](http://localhost:3000)

## 🔧 Режим розробки

Для розробки з hot-reload використовуйте окремий compose файл:

```bash
docker-compose -f docker-compose.dev.yml up
```

У цьому режимі:
- Код монтується як volume (зміни відразу відображаються)
- Запускається `pnpm dev` замість production сервера
- Hot-reload працює для фронтенду та бекенду

## 📊 Корисні команди

### Перегляд логів
```bash
# Всі сервіси
docker-compose logs -f

# Тільки застосунок
docker-compose logs -f app

# Тільки БД
docker-compose logs -f mysql
```

### Зупинка сервісів
```bash
# Зупинити контейнери
docker-compose stop

# Зупинити і видалити контейнери
docker-compose down

# Зупинити і видалити контейнери + volumes (БД буде очищена!)
docker-compose down -v
```

### Перезапуск сервісів
```bash
# Перезапустити всі сервіси
docker-compose restart

# Перезапустити тільки застосунок
docker-compose restart app
```

### Пересборка образів
```bash
# Пересобрати з нуля
docker-compose build --no-cache

# Пересобрати і перезапустити
docker-compose up -d --build
```

### Виконання команд в контейнері
```bash
# Увійти в shell застосунку
docker-compose exec app sh

# Виконати pnpm команду
docker-compose exec app pnpm db:push

# Увійти в MySQL
docker-compose exec mysql mysql -u user -ppassword elementor_db
```

## 🗄️ Управління базою даних

### Резервне копіювання
```bash
docker-compose exec mysql mysqldump -u user -ppassword elementor_db > backup.sql
```

### Відновлення з резервної копії
```bash
docker-compose exec -T mysql mysql -u user -ppassword elementor_db < backup.sql
```

### Скидання БД
```bash
docker-compose exec mysql mysql -u root -prootpassword -e "DROP DATABASE elementor_db; CREATE DATABASE elementor_db;"
docker-compose restart app
```

## 🐛 Вирішення проблем

### Порт вже зайнятий
Якщо порт 3000 або 3306 вже використовується, змініть порти в `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"  # Використовувати 3001 замість 3000
```

### MySQL не готова
Якщо застосунок не може підключитися до БД:
```bash
# Перевірте здоров'я MySQL
docker-compose exec mysql mysqladmin ping -h localhost -u root -prootpassword

# Подивіться логи MySQL
docker-compose logs mysql
```

### Помилки при збірці
```bash
# Очистити всі Docker об'єкти
docker system prune -a

# Пересобрати з нуля
docker-compose build --no-cache
```

### Проблеми з правами доступу (Linux)
```bash
# Дати права на папку логів
sudo chown -R $USER:$USER logs/
```

## 🔐 Безпека для Production

### Перед розгортанням на сервері:

1. **Змініть всі паролі** в `docker-compose.yml`:
   - `MYSQL_ROOT_PASSWORD`
   - `MYSQL_PASSWORD`
   - `JWT_SECRET` (згенеруйте випадковий ключ: `openssl rand -base64 32`)

2. **Не експонуйте порт MySQL**:
   ```yaml
   # Закоментуйте або видаліть
   # ports:
   #   - "3306:3306"
   ```

3. **Використовуйте .env файл** замість прямих значень:
   ```bash
   # Створіть .env.production
   cat > .env.production << EOF
   JWT_SECRET=$(openssl rand -base64 32)
   MYSQL_ROOT_PASSWORD=$(openssl rand -base64 32)
   MYSQL_PASSWORD=$(openssl rand -base64 32)
   EOF
   ```

4. **Налаштуйте reverse proxy** (nginx/traefik) з SSL

## 📈 Моніторинг

### Використання ресурсів
```bash
docker stats
```

### Розмір образів
```bash
docker-compose images
```

## 🔄 Оновлення

```bash
# Отримати останній код
git pull

# Пересобрати та перезапустити
docker-compose up -d --build
```

## 📚 Структура проекту

```
.
├── docker-compose.yml        # Production конфігурація
├── docker-compose.dev.yml    # Development конфігурація
├── Dockerfile                # Production образ
├── Dockerfile.dev            # Development образ
├── .dockerignore            # Файли для ігнорування при збірці
└── logs/                    # Логи застосунку (створюється автоматично)
```

## 🤝 Допомога

Якщо у вас виникли проблеми:
1. Перевірте логи: `docker-compose logs -f`
2. Перевірте статус: `docker-compose ps`
3. Створіть issue на GitHub

## 📝 Додаткові ресурси

- [Документація Docker](https://docs.docker.com)
- [Документація Docker Compose](https://docs.docker.com/compose)
- [Документація MySQL Docker](https://hub.docker.com/_/mysql)
- [README проекту](./README.md)
