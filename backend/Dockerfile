# Stage 1: Build with Maven
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the jar with Java (non-root)
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# Create a non-root user
RUN addgroup -S app && adduser -S -G app app

# Copy built jar
COPY --from=build /app/target/*.jar app.jar

# Fix permissions (optional but good)
RUN chown -R app:app /app

# Switch to non-root user
USER app

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
