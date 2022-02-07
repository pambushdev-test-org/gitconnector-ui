# Gitconnector UI Data Visualizer

This is a simple react app to visualize the data from json files into an interactive data table.

App has been dockerized and can be deployed to kubernetes clusters. Infrastructure orchestration done using Terraform and CI/CD with CircleCI. 
CircleCI yaml file configs are in the circleci-project-setup branch of this repo. Ingress to the app is done via a load balancer service. Configs currently setup for deployment on Google Cloud Platform.

A custom docker image **pambushdev/alpine-gcloud-terraform** is used to assist deployment and is located in dockerhub. This container has an Alpine OS and comes with Terraform, gcloud, and kubectl pre-installed. This make it easy for CircleCI to run configs with these services without issue.

## Usage
Requirements:
- Terraform cloud account and access token
- CircleCI account
- Google Cloud account
- Google Cloud service account with creds.json
- Docker account
- Github account

In CircleCI, create a new project for the repo and setup an ssh key to connect it. 
The following CircleCI project-level environment variables need to be setup:
```
DOCKER_LOGIN = <login>
DOCKER_PWD = <password>
GCP_TEST_PROJECT = <GCP test project name>
GOOGLE_CLOUD_KEYS = <credentials json file for GCP service account>
TF_CLOUD_TOKEN = <access token for Terraform cloud>
```
Connect github repo to CircleCI project.
Run config.yaml for the CircleCI config branch circleci-project-setup.
Verify deployment to gcloud.
Get the ingress endpoint for the app service in gcloud and view the app in a web browser.
