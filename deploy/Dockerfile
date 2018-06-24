FROM node:carbon

WORKDIR /app

COPY . .
RUN yarn install --prod
#CMD ["sh", "-c", "tail -f /dev/null"]
CMD ["npm", "run", "start"]
