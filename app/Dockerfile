FROM node

RUN mkdir -p /home/ec2-user/app/node_modules && chown -R node:node /home/ec2-user/app

WORKDIR /home/ec2-user/app

COPY package*.json ./

USER root

RUN npm install

COPY --chown=node:node . .

CMD [ "node", "index.js" ]
