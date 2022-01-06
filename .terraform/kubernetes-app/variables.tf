variable "region" {
  default = "us-west1"
}

variable "zone" {
  default = "us-west1-a"
}

variable "cluster" {
  default = "cicd-gitconnector-ui"
}

variable "app" {
  type        = string
  description = "Application Name"
  default     = "gitconnector-ui"
}

variable "docker-image" {
  type        = string
  description = "Name of docker image to deploy"
  default     = ""
}