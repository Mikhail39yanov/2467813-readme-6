# Как работать над проектом

## Окружение

Для удобства работы над проектом используются инструменты из **Node.js** , **npm** и **nx**. Все необходимые настройки произведены. Убедитесь, что на рабочем компьютере установлена **Node.js**, соответсвтующая актуальной версии. Актуальная версия **Node.js** указана в файле `package.json` в поле `node`. После, в терминале, перейти в директорию `project` с проектом и _единожды_ запустите команду:

```bash
npm install
```

Данная команда запустит процесс установки зависимостей проекта из **npm**.

Для нормальной работы приложения необходимо создать файл `<service_name>.env` в каждом проекте-микросервисе к примеру в директории `project\apps\user` создать файл `user.env` и заполнить переменные из файла `.env-sample`.

### Список всех переменных окружения

#### Переменных окружения проекта `user`

`apps/user/user.env`

```bash
DB_MONGO_HOST=value - IP-адрес сервера базы данных (MongoDB)
DB_MONGO_USER=value - Имя пользователя в базе данных (MongoDB)
DB_MONGO_PASSWORD=value - Пароль пользователя в базе данных (MongoDB)
DB_MONGO_PORT=value - Порт пользователя в базе данных (MongoDB)
DB_MONGO_NAME=value - Название базы данных (MongoDB)
DB_MONGO_AUTH_BASE=value - Название базы данных для аутентификация (MongoDB)

JWT_ACCESS_TOKEN_SECRET=value - секрет для доступа токена
JWT_ACCESS_TOKEN_EXPIRES_IN=value - время жизни доступа токена
JWT_REFRESH_TOKEN_SECRET=value - секрет для доступа рефреш токена
JWT_REFRESH_TOKEN_EXPIRES_IN=value - время жизни доступа рефреш токена

PORT_USER=value - Порт для входящих подключений

RABBIT_HOST=value - IP-адрес сервера (RabbitMQ)
RABBIT_USER=alue - Имя пользователя (RabbitMQ)
RABBIT_PASSWORD=value - Пароль пользователя (RabbitMQ)
RABBIT_PORT=value - Порт пользователя (RabbitMQ)
RABBIT_QUEUE=value - Название очереди (RabbitMQ)
RABBIT_EXCHANGE=value - Название обменника (RabbitMQ)
```

#### Переменных окружения проекта `blog`

`apps/blog/blog.env`

```bash
POSTGRES_USER=value - Имя пользователя в базе данных (PostgreSql)
POSTGRES_PASSWORD=value - Пароль пользователя в базе данных (PostgreSql)
POSTGRES_NAME=value - Имя базы данных (PostgreSql)
POSTGRES_PORT=value - Порт пользователя в базе данных (PostgreSql)

PGADMIN_DEFAULT_EMAIL=value - Email пользователя в (PgAdmin)
PGADMIN_DEFAULT_PASSWORD=value - Пароль пользователя в для аутентификация (PgAdmin)

PORT_BLOG=value - Порт для входящих подключений

RABBIT_HOST=value - IP-адрес сервера (RabbitMQ)
RABBIT_USER=alue - Имя пользователя (RabbitMQ)
RABBIT_PASSWORD=value - Пароль пользователя (RabbitMQ)
RABBIT_PORT=value - Порт пользователя (RabbitMQ)
RABBIT_QUEUE=value - Название очереди (RabbitMQ)
RABBIT_EXCHANGE=value - Название обменника (RabbitMQ)
```

#### Переменных окружения проекта `file`

`apps/file/file.env`

```bash
FILE_MONGO_HOST=value - IP-адрес сервера базы данных (MongoDB)
FILE_MONGO_USER=value - Имя пользователя в базе данных (MongoDB)
FILE_MONGO_PASSWORD=value - Пароль пользователя в базе данных (MongoDB)
FILE_MONGO_PORT=value - Порт пользователя в базе данных (MongoDB)
FILE_MONGO_DB_NAME=value - Название базы данных (MongoDB)
FILE_MONGO_AUTH_BASE=value - Название базы данных для аутентификация (MongoDB)

UPLOAD_DIRECTORY_PATH=value - путь для загрузки файлов
SERVE_ROOT=value - место хранения статических файлов

PORT_FILE=value - Порт для входящих подключений
```

#### Переменных окружения проекта `notify`

`apps/notify/notify.env`

```bash
RABBITMQ_DEFAULT_USER=value - Имя пользователя в RabbitMQ
RABBITMQ_DEFAULT_PASS=value - Пароль пользователя в RabbitMQ

RABBIT_HOST=value - IP-адрес сервера (RabbitMQ)
RABBIT_USER=alue - Имя пользователя (RabbitMQ)
RABBIT_PASSWORD=value - Пароль пользователя (RabbitMQ)
RABBIT_PORT=value - Порт пользователя (RabbitMQ)
RABBIT_QUEUE=value - Название очереди (RabbitMQ)
RABBIT_EXCHANGE=value - Название обменника (RabbitMQ)

NOTIFY_MONGO_HOST=value - IP-адрес сервера базы данных (MongoDB)
NOTIFY_MONGO_USER=value - Имя пользователя в базе данных (MongoDB)
NOTIFY_MONGO_PASSWORD=value - Пароль пользователя в базе данных (MongoDB)
NOTIFY_MONGO_PORT=value - Порт пользователя в базе данных (MongoDB)
NOTIFY_MONGO_DB_NAME=value - Название базы данных (MongoDB)
NOTIFY_MONGO_AUTH_BASE=value - Название базы данных для аутентификация (MongoDB)

PORT_NOTIFY=value - Порт для входящих подключений

MAIL_SMTP_HOST=value - адрес SMTP сервера
MAIL_SMTP_PORT=value - порт, через который будет осуществляться подключение к SMTP серверу
MAIL_USER_NAME=value -  имя пользователя для аутентификации на SMTP сервере
MAIL_USER_PASSWORD=value - пароль для аутентификации на SMTP сервере
MAIL_FROM=value -  адрес электронной почты
```

#### Переменных окружения проекта `api`

`apps/api/api.env`

```bash
PORT_API=value - Порт для входящих подключений
```

#### Переменных окружения prisma

`project/libs/blog/models/prisma/.env`

```bash
DATABASE_URL=value - Строка соединения к postgresql через prisma (PostgreSql)
```

Далее следует в директории `project` запустить все docker compose.

#### Локальный запуск базы данных MongoDB для `user`

Для запуска база данных у вас на машине должен быть установлен docker и заполненный файл `user.env`

```bash
docker compose --file ./apps/user/docker-compose.dev.yml --env-file ./apps/user/user.env --project-name "readme-user" up -d
```

#### Локальный запуск базы данных PostgreSql для `blog`

Для запуска база данных у вас на машине должен быть установлен docker и заполненный файл `blog.env`

```bash
docker compose --file ./apps/blog/docker-compose.dev.yml --env-file ./apps/blog/blog.env --project-name "readme-blog" up -d
```

#### Локальный запуск базы данных MongoDB для `file`

Для запуска база данных у вас на машине должен быть установлен docker и заполненный файл `file.env`

```bash
docker compose --file ./apps/file/docker-compose.dev.yml --env-file ./apps/file/file.env --project-name "readme-file" up -d
```

#### Локальный запуск fake-smtp-server, RabbitMQ и базы данных MongoDB для `notify`

Для запуска fake-smtp-server, RabbitMQ и базы данных MongoDB у вас на машине должен быть установлен docker и заполненный файл `notify.env`

```bash
docker compose --file ./apps/notify/docker-compose.dev.yml --env-file ./apps/notify/notify.env --project-name "readme-notify" up -d
```

Затем выполнить миграцию `npx nx run blog:db:migrate` и сгенерировать клиент prisma `npx nx run blog:db:generate`

### Сценарии

После создания проекта вам доступны следующие сценарии.
Откройте терминал в директории `project`. Чтобы запустить проект вам необходимо запустить сервис к примеру `npx run <service_name>:serve` где `service_name` это приложение в директории `project\apps`

#### Запуск проекта

```bash
npx nx run user:serve
```

and

```bash
npx nx run blog:serve
```

and

```bash
npx nx run notify:serve
```

and

```bash
npx nx run file:serve
```

and

```bash
npx nx run api:serve
```

В процессе запуска проекта будет выполнен процесс «Сборки проекта» и запуска результирующего кода.

#### Проверить линтером приложение

```bash
npx nx lint <service_name>
```

Запуск проверки проекта статическим анализатором кода **ESLint**.

Линтер проверяет файлы только внутри директории `project\<service_name>`.

**Обратите внимание**, при запуске данной команды, ошибки выводятся в терминал.

#### Линтинг Prisma

```bash
npx nx run blog:db:lint
```

#### Создание миграций Prisma

```bash
npx nx run blog:db:migrate
```

#### Принудительный сброс базы данных до начального состояния

```bash
npx nx run blog:db:reset
```

#### Запуск генерации клиента для Prisma

```bash
npx nx run blog:db:generate
```

#### Наполнение базы данных данными

```bash
npx nx run blog:db:seed
```

#### Создание микросервиса

```bash
npx nx g @nx/nest:application user
```

#### Создание модуля библиотеки

```bash
npx nx generate @nx/node:library constant --directory libs/shared/constant
```

В процессе создание библиотеки будет выполнен процесс создание модуля по пути `project\libs\shared` где `constant` название библиотеки, a `--directory libs/shared/constant` путь до нужного места.

#### Инициализации Prisma

Для инициализации Prisma не обходимо перейти в рабочую дерикторию `project\libs\blog\models` и выполнить команду.

```bash
npx prisma init --datasource-provider postgresql
```

#### Линтинг prisma model

Для линтинга prisma model не обходимо перейти в рабочую дерикторию `project\libs\blog\models` и выполнить команду.

```bash
npx prisma format ./prisma/schema.prisma
```

#### migration prisma model

Для migration prisma model не обходимо перейти в рабочую дерикторию `project\libs\blog\models` и выполнить команду.

```bash
npx prisma migrate dev --name "Added model for Post" --schema prisma/schema.prisma --skip-generate
```

- `--name` — название миграции
- `--schema` — путь к схеме
- `--skip-generate` — пропустить формирование клиента.

## Структура проекта

### Директория `project`

В директории размещаются исходный код проекта: микросервисы, библиотеки, модули и так далее. Структура директории `project` может быть произвольной.

### Файл `Readme.md`

Файл, содержащий инструкции по работе с учебным репозиторием.

### Файл `Contributing.md`

Файл, содержащий советы и инструкции по внесению изменений в учебный репозиторий.

### Остальное

Все остальные файлы в проекте являются служебными. Пожалуйста, не удаляйте и не изменяйте их самовольно. Только если того требует задание или наставник.
