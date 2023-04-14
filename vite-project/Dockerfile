# FROM node:14.21.3-alpine
# # FROM node
# WORKDIR /app
# COPY package.json .
# RUN yarn install
# COPY . .
# ## EXPOSE [Port you mentioned in the vite.config file]
# EXPOSE 3000

# CMD ["yarn", "dev"]

FROM node:14.21.3-alpine AS builder
# FROM node
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
## EXPOSE [Port you mentioned in the vite.config file]
# Build the app with Vite
RUN yarn build

#Stage 2
#######################################
#pull the official nginx:1.19.0 base image
FROM nginx:1.19.0-alpine
#copies React to the container directory
# Set working directory to nginx resources directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static resources
RUN rm -rf ./*
# Copies static resources from builder stage
COPY ./docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist . 
EXPOSE 81
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]