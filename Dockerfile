FROM node:20-alpine AS build

ARG E

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN if [[ "$E" = "production" ]]; then \
    npm run build; \
    else \
    npm run build-dev; \
    fi

RUN ls -la /app/dist

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
