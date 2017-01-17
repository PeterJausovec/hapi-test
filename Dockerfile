FROM node:argon
EXPOSE 8080
WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

CMD ["node", "index.js"]
