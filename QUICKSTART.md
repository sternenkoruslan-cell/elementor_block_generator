# 🚀 Швидкий старт - Elementor Block Generator

## Варіант 1: Docker (Найпростіший) 🐳

### Передумови
- [Docker Desktop](https://www.docker.com/products/docker-desktop) або Docker + Docker Compose

### Запуск за 3 кроки:

```bash
# 1. Клонувати репозиторій
git clone https://github.com/sternenkoruslan-cell/elementor_block_generator.git
cd elementor_block_generator

# 2. Запустити
docker-compose up -d

# 3. Відкрити в браузері
# http://localhost:3000
```

**Готово!** ✨

### Корисні команди:

```bash
# Переглянути логи
docker-compose logs -f

# Зупинити
docker-compose down

# Перезапустити
docker-compose restart

# Режим розробки
docker-compose -f docker-compose.dev.yml up
```

---

## Варіант 2: Локальна розробка 💻

### Передумови
- Node.js 20+
- pnpm (`npm install -g pnpm`)
- MySQL 8.0

### Linux

```bash
# 1. Встановити MySQL
sudo apt update
sudo apt install mysql-server -y
sudo service mysql start

# 2. Створити БД
sudo mysql -e "CREATE DATABASE elementor_db;"
sudo mysql -e "CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';"
sudo mysql -e "GRANT ALL PRIVILEGES ON elementor_db.* TO 'user'@'localhost';"
sudo mysql -e "FLUSH PRIVILEGES;"

# 3. Клонувати та встановити
git clone <repo-url>
cd elementor_block_generator
pnpm install

# 4. Налаштувати .env
cat > .env << EOF
NODE_ENV=development
PORT=3000
DATABASE_URL=mysql://user:password@localhost:3306/elementor_db
JWT_SECRET=replace_me
VITE_APP_ID=local
OAUTH_SERVER_URL=http://localhost:3000/api/oauth
OWNER_OPEN_ID=admin
EOF

# 5. Міграції та запуск
pnpm db:push
pnpm dev
```

### Windows

```powershell
# 1. Встановити MySQL з https://dev.mysql.com/downloads/mysql/

# 2. Клонувати та встановити
git clone <repo-url>
cd elementor_block_generator
pnpm install

# 3. Створіти .env файл (створіть вручну або використайте notepad)
# DATABASE_URL=mysql://user:password@localhost:3306/elementor_db
# NODE_ENV=development
# PORT=3000
# JWT_SECRET=replace_me

# 4. Міграції та запуск
pnpm db:push
pnpm dev
```

---

## 📋 Перевірка роботи

1. Відкрийте браузер: `http://localhost:3000`
2. Ви побачите головну сторінку
3. Натисніть "Відкрити конструктор"
4. Оберіть шаблон та налаштуйте блок
5. Скопіюйте або завантажте згенерований HTML/CSS

---

## 🆘 Вирішення проблем

### Docker

**Помилка: порт вже зайнятий**
```bash
# Змініть порт в docker-compose.yml
ports:
  - "3001:3000"  # Використати 3001
```

**Контейнери не запускаються**
```bash
# Подивіться логи
docker-compose logs -f

# Пересоберіть
docker-compose build --no-cache
docker-compose up -d
```

### Локальна розробка

**Помилка підключення до MySQL**
```bash
# Перевірте чи MySQL запущений
sudo service mysql status  # Linux
# або перевірте у Services на Windows

# Перевірте DATABASE_URL у .env
```

**Порт 3000 зайнятий**
```bash
# Змініть PORT у .env файлі
PORT=3001
```

---

## 📚 Додаткова інформація

- **Повна документація**: [README.md](./README.md)
- **Docker інструкції**: [DOCKER_SETUP.md](./DOCKER_SETUP.md)
- **Система блоків**: [BLOCK_SYSTEM_README.md](./BLOCK_SYSTEM_README.md)
- **Список блоків**: [BLOCKS_LIST.md](./BLOCKS_LIST.md)

---

## 🎯 Наступні кроки

1. Ознайомтесь з інтерфейсом
2. Спробуйте різні шаблони блоків
3. Налаштуйте стилі та контент
4. Експортуйте код для Elementor
5. Створіть власні пресети (потрібна авторизація)

**Приємної роботи!** 🎨✨
