FROM cheeaun/puppeteer

COPY . /home/pptruser

WORKDIR /home/pptruser

RUN npm install

EXPOSE 3030

ENTRYPOINT ["npm", "start"]