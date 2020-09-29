FROM node:10-stretch-slim

WORKDIR /home/sam/Workspace/docker-hello-world

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
