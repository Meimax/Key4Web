FROM node:alpine
RUN apk update && apk upgrade
WORKDIR /app
COPY ./build .
COPY package.json .
WORKDIR /app/Key4Web
#RUN npm install
ENTRYPOINT [ "node", "build"]
EXPOSE 3000