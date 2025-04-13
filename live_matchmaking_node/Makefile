# Sobe o ambiente com RabbitMQ
up:
	docker compose up -d

# Derruba os containers
down:
	docker compose down

# Build da aplicação TypeScript
build:
	npm install
	npm run build

# Roda a API compilada (modo produção)
start-server:
	node dist/server.js

# Roda o consumer compilado (modo produção)
start-consumer:
	node dist/consumer.js

# Roda a API em modo desenvolvimento com auto reload
dev-server:
	npm run dev:server

# Roda o consumer em modo desenvolvimento com auto reload
dev-consumer:
	npm run dev:consumer

# Build da imagem Docker
docker-build:
	docker build -t matchmaking-api .

# Roda o container da API (pode sobrescrever entrypoint com CMD)
docker-server:
	docker run -p 3000:3000 matchmaking-api node dist/server.js

# Roda o container do consumer
docker-consumer:
	docker run matchmaking-api node dist/consumer.js

# Executa o teste de carga com Artillery
load-test:
	artillery run load-test.yml
