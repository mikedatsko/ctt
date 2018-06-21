FROM node:carbon

WORKDIR /app

COPY . .
RUN yarn install --pure-lockfile
#CMD ["sh", "-c", "tail -f /dev/null"]
CMD ["npm", "run", "start"]
