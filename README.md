# Electronic Javelin API

This API is responsible for recieve rest requests from arduino and main application.

## Development

### Requirements

- [Node](https://nodejs.org/en/) v16.9.1 or higher
- [yarn](https://yarnpkg.com/getting-started/install) 1.22.11 or higher
- [Docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/install/)

### Setup

**Clone repo**

```sh
https://github.com/IsaqueNunes/dardoeletronico.git && \
cd eletronicjavelin
```

**Install dependencies**

```sh
yarn install
```

### Runing application

**Start container**

```sh
docker-compose up -d
```

**Start application**

```sh
yarn start
```

**Start Prisma Studio [Optional]**

```sh
yarn prisma studio
```

### Using API

| Requests types     | Links to send requests                                                           |
| ------------------ | -------------------------------------------------------------------------------- |
| Get all values     | [http://localhost:3000/values/get/all](http://localhost:3000/values/get/all)     |
| Get only one value | [http://localhost:3000/values/get:id](http://localhost:3000/values/get:id)       |
| Post one value     | [http://localhost:3000/value/post](http://localhost:3000/value/post)             |
| Put one value      | [http://localhost:3000/value/put/:id](http://localhost:3000/value/post/:id)      |
| Delete one value   | [http://localhost:3000/value/delete/:id](http://localhost:3000/value/delete/:id) |
