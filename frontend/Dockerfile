FROM node:23.11.0-alpine3.20

WORKDIR /app

# Declare the ARG for build-time value
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

# Copy and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the app code
COPY . .

# Create non-root user and switch
RUN addgroup app && adduser -S -G app app
RUN chown -R app:app /app
USER app

# Dev port
EXPOSE 5173

RUN npm run build
CMD ["npx", "serve", "dist"]

