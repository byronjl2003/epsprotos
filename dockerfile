FROM node:alpine as builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx

COPY --from=builder /app/dist/adminpro /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80