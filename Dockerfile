FROM node:alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY ./ .
WORKDIR /app/Key4Web
RUN npm install
ENTRYPOINT [ "npm", "run",  "build", "--"]
EXPOSE 5173