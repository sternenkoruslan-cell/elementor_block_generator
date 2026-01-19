.PHONY: help build up down restart logs clean dev prod

help: ## Показати це повідомлення
	@echo "Доступні команди:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-15s\033[0m %s\n", $$1, $$2}'

build: ## Збудувати Docker образи
	docker-compose build

up: ## Запустити всі сервіси
	docker-compose up -d

down: ## Зупинити всі сервіси
	docker-compose down

restart: ## Перезапустити всі сервіси
	docker-compose restart

logs: ## Показати логи всіх сервісів
	docker-compose logs -f

clean: ## Видалити контейнери та volumes
	docker-compose down -v

dev: ## Запустити в режимі розробки
	docker-compose -f docker-compose.dev.yml up

dev-build: ## Збудувати та запустити в режимі розробки
	docker-compose -f docker-compose.dev.yml up --build

dev-down: ## Зупинити режим розробки
	docker-compose -f docker-compose.dev.yml down

prod: ## Запустити production версію
	docker-compose up -d

prod-build: ## Збудувати та запустити production
	docker-compose up -d --build

rebuild: ## Повністю пересобрати все
	docker-compose down
	docker-compose build --no-cache
	docker-compose up -d

status: ## Показати статус контейнерів
	docker-compose ps

shell: ## Відкрити shell в контейнері app
	docker-compose exec app sh

mysql: ## Підключитися до MySQL
	docker-compose exec mysql mysql -u user -ppassword elementor_db

backup: ## Створити резервну копію БД
	docker-compose exec mysql mysqldump -u user -ppassword elementor_db > backup_$$(date +%Y%m%d_%H%M%S).sql
	@echo "Backup створено: backup_$$(date +%Y%m%d_%H%M%S).sql"
