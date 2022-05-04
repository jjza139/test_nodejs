FROM node:16.3.0-alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 9000
CMD ["npm","index.js"]

