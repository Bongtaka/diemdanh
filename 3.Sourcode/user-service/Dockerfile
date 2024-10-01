# Use an official OpenJDK image as the base for building
FROM openjdk:17-jdk-alpine as build

# Set the working directory inside the container
WORKDIR /app

# Copy the Gradle wrapper and project files into the container
COPY . /app

# Run the Gradle build to generate the JAR file
RUN ./gradlew -Pprod clean bootJar

# Use a second, slimmer base image for running the final JAR
FROM openjdk:17-jdk-alpine

# Set the working directory for the final container
WORKDIR /app

# Copy the built JAR file from the previous build stage
COPY --from=build /app/build/libs/user-service-0.0.1-SNAPSHOT.jar /app/user-service-0.0.1-SNAPSHOT.jar

# Expose the port your application runs on (if needed)
EXPOSE 8080

# Set the entry point to run the JAR file
ENTRYPOINT ["java", "-jar", "/app/user-service-0.0.1-SNAPSHOT.jar","--debug"]
