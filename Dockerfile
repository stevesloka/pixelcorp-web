FROM nginx:1.11.1

COPY ./default.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html

WORKDIR /usr/src
ADD start.sh /usr/src/
RUN chmod +x /usr/src/start.sh

COPY ./certs/server.pem /etc/nginx/ssl/
COPY ./certs/server-key.pem /etc/nginx/ssl/

ENTRYPOINT ./start.sh

EXPOSE 80
EXPOSE 443
