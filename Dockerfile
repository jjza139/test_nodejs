FROM node:16.3.0-alpine

ENV NGINX_MAX_UPLOAD 0
ENV LISTEN_PORT 80
ENV UWSGI_INI /uwsgi.ini
ENV STATIC_INDEX 0
ENV NGINX_WORKER_PROCESSES auto

ADD ./app /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 9000
ADD start.sh /start.sh
RUN chmod +x /start.sh
ADD entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
CMD ["/start.sh"]
# CMD ["npm","start"]


