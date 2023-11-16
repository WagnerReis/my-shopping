FROM node:20.9.0

WORKDIR /usr/src/app

COPY . .

RUN npm cache clean --force
RUN npm install

RUN npx prisma generate --schema=./prisma/schema.prisma

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
