# FROM node:25

# WORKDIR /app

# COPY . .

# RUN npm install

# # Create a non-root user and switch to it
# RUN groupadd -r appuser && useradd -r -g appuser appuser

# USER appuser

# EXPOSE 3000

# CMD ["npm", "start"]

#using multi-stage build to reduce the final image size and enhance security by running the application as a non-root user

FROM node:25 AS builder

WORKDIR /build

COPY package*.json ./
RUN npm install

COPY . .

# execution stage
# FROM node:25-slim

#using distroless image for production to minimize attack surface and reduce vulnerabilities
FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/app.js ./app.js

# # Create a non-root user and switch to it
# RUN groupadd -r appuser && useradd -r -g appuser appuser distroless images do not have package managers or shell access, 
#so we cannot create users in the traditional way. Instead, we can specify a non-root user in the Dockerfile.

USER nonroot


EXPOSE 3000

CMD ["app.js"]

