FROM node:alpine
WORKDIR /app
COPY ./ .
WORKDIR /app/Key4Web
RUN apk update && apk upgrade
RUN npm install
ENTRYPOINT [ "npm", "run",  "build", "--"]
EXPOSE 5172