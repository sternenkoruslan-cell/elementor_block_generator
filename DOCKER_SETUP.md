# Інструкція по налаштуванню та запуску проекту за допомогою Docker Compose

## Передумови
Перед початком роботи переконайтесь, що у вас встановлено:
- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

## Кроки для налаштування проекту
1. **Клонуйте репозиторій**:
   ```bash
   git clone https://github.com/sternenkoruslan-cell/elementor_block_generator.git
   cd elementor_block_generator
   ```

2. **Переконайтеся, що файл `docker-compose.yml` присутній у кореневій папці проекту**.

3. **Збудуйте Docker образи**:
   ```bash
   docker-compose build
   ```

4. **Запустіть контейнери**:
   ```bash
   docker-compose up -d
   ```
   Це завантажить всі необхідні залежності та запустить ваш проект в фоновому режимі.

5. **Перевірте, чи контейнери запущені**:
   ```bash
   docker-compose ps
   ```
   Ви повинні бачити активні контейнери вашого проекту.

## Доступ до проекту
Після запуску контейнерів, ви можете отримати доступ до проекту через браузер за адресою `http://localhost:8080` (за умовчанням).

## Зупинка та видалення контейнерів
- Щоб зупинити контейнери, виконайте:
   ```bash
   docker-compose down
   ```

## Додаткова інформація
Ви можете знайти більше інформації у документації Docker Compose: [Документація](https://docs.docker.com/compose/)