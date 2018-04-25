
FROM udacity/nginx:1.12

RUN rm /etc/nginx/conf.d/*.conf

COPY rootfs/ /

RUN mkdir /current
ADD ./public /current/
ADD ./build /current/

EXPOSE 80