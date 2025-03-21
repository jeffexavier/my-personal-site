# Etapa 1: Build da aplicação
FROM node:20 AS builder

WORKDIR /app

# Copia os arquivos necesários
COPY package.json package-lock.json ./

# Instala as dependências (excluindo devDependencies)
RUN npm install

# Copia o restante do código para o container
COPY . .

# Build da aplicação Next.js
RUN NEXT_DISABLE_ESLINT=1 NEXT_PUBLIC_IGNORE_BUILD_ERRORS=1 npm run build

# Eatapa 2: Rodando a aplicação
FROM node:20 AS runner

# Copia apenas os arquivos necessários da etapa anterior
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Instala apenas as depend~encias de produção
# RUN npm install --omit=dev

# Definir a variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta que o Next.js irá rodar
EXPOSE 3000

# Comando para iniciar o servidor Next.js
CMD ["npm", "run", "start" ]