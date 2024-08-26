FROM node:22-alpine AS build
WORKDIR /website

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /website/dist /usr/share/nginx/html
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]