<h1>PING APP </h1>

---

Простое серверное приложение для тестирование get запрсосов на node js

1. Запуск

```
yarn && yarn start
```

2. Использование
- Запрос:

```
curl --location --request GET '{{host}}/get'

```

- Ответ:

```JSON
{
    "id":"xeya1r5n3me",
    "status":"200",
    "message":"OK",
    "date":"2020-07-06T09:43:30.587Z"
}
```
