FROM node
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8712
CMD ["npm","start"]
