FROM node:22.15.1

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN npx prisma generate

RUN yarn build 

CMD ["node", "dist/main.js"]
