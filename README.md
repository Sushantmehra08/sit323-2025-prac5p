# SIT323-6.1P: Deploying Calculator Microservice to Kubernetes

## Overview
This project deploys a containerized Node.js calculator microservice to a local Kubernetes cluster. The image is pushed to Docker Hub under the user **Sushantmehra008**.

## Prerequisites
- Docker Desktop with Kubernetes enabled
- kubectl CLI
- Node.js
- Docker Hub account (Sushantmehra008)
- GitHub account (Sushantmehra08)

## Steps

### 1. Build and Push Docker Image
```
docker build -t Sushantmehra008/simple-calculator-app:v1 .
docker push Sushantmehra008/simple-calculator-app:v1
```

### 2. Deploy to Kubernetes
```
kubectl apply -f app-deployment.yaml
kubectl apply -f app-service.yaml
```

### 3. Test the App
Visit:
```
http://localhost:3000/add?num1=10&num2=5
```

### 4. Clean Up
```
kubectl delete -f app-deployment.yaml
kubectl delete -f app-service.yaml
```

## Docker Hub Repo
https://hub.docker.com/r/Sushantmehra008/simple-calculator-app

## GitHub Repo
https://github.com/Sushantmehra08/sit323-2025-prac6p