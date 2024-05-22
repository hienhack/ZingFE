FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

# ARG VITE_TEXT

# ENV VITE_TEXT=$VITE_TEXT
# # ENV VITE_API_KEY=$VITE_API_KEY

COPY . .

RUN npm run build

RUN ls -la /app/dist

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY env.sh /docker-entrypoint.d/env.sh
RUN chmod +x /docker-entrypoint.d/env.sh

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
