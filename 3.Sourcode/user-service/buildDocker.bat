@echo off
echo ============================
echo Building JAR file with Gradle...
echo ============================
gradlew -Pprod clean bootJar

if %errorlevel% neq 0 (
    echo ============================
    echo Failed to build the JAR file.
    echo ============================
    exit /b %errorlevel%
)

echo ============================
echo JAR file built successfully.
echo ============================

echo ============================
echo Checking Docker version...
docker --version
if %errorlevel% neq 0 (
    echo ============================
    echo Docker not installed or not running.
    echo ============================
    exit /b %errorlevel%
)

echo ============================
echo Building Docker image...
echo ============================
docker build -t kiennd98/userservice-affiliate:latest -f src\main\docker\deploy\Dockerfile .

if %errorlevel% neq 0 (
    echo ============================
    echo Failed to build the Docker image.
    echo ============================
    exit /b %errorlevel%
)

echo ============================
echo Docker image built successfully.
echo ============================

echo ============================
echo Pushing Docker image to Docker Hub...
echo ============================
docker push kiennd98/userservice-affiliate:latest

if %errorlevel% neq 0 (
    echo ============================
    echo Failed to push the Docker image to Docker Hub.
    echo ============================
    exit /b %errorlevel%
)

echo ============================
echo Docker image pushed to Docker Hub successfully.
echo ============================

pause
