FROM node:boron



ENV NGINX_MAX_UPLOAD 0
ENV LISTEN_PORT 80
ENV UWSGI_INI /app/uwsgi.ini
ENV STATIC_INDEX 0
ENV NGINX_WORKER_PROCESSES auto
### create folder
RUN mkdir -p /usr/src/app
### set work folder
WORKDIR /usr/src/app
### install package
COPY package.json /usr/src/app
RUN npm install

### Copy all file to folder
COPY . /usr/src/app/

# RUN apt-get update && apt-get install -y python-dev libsasl2-modules libsasl2-dev gcc
# RUN apt-get install libsasl2-dev python-dev libldap2-dev libssl-dev


# ADD start.sh /start.sh
# RUN chmod +x /start.sh
# ADD entrypoint.sh /entrypoint.sh
# RUN chmod +x /entrypoint.sh

# ENTRYPOINT ["/entrypoint.sh"]
# CMD ["/start.sh"]
CMD ["node","start"]

