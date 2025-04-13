# Etapa 1: build da aplicação
FROM node:18 AS build

# Cria diretório da aplicação
WORKDIR /app

# Copia arquivos de dependência
COPY package*.json ./

# Instala apenas as dependências de produção
RUN npm install

# Copia os arquivos da aplicação
COPY . .

# Compila o TypeScript para JavaScript
RUN npm run build

# Etapa 2: imagem final, apenas com arquivos compilados
FROM node:18-alpine

WORKDIR /app

# Copia apenas a build final da etapa anterior
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json ./

# Instala somente dependências de produção
RUN npm install --omit=dev

# Por padrão, subimos o server — pode ser sobrescrito no Docker Compose
CMD ["node", "dist/server.js"]
