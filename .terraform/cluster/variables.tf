variable "project" {
  description = "GCP Project Name"
}

variable "machine_type" {
  description = "Machine type for GCP cluster"
  default     = "f1-micro"
}

variable "credentials_file" {
  description = "GCP creds"
  default     = ""
}

variable "region" {
  default = "us-west1"
}

variable "zone" {
  default = "us-west1-a"
}

variable "cluster" {
  default = "cicd-gitconnector-ui"
}

variable "app_name" {
  default = "gitconnector-ui"
}

variable "kubernetes_min_ver" {
  default = "latest"
}

variable "kubernetes_max_ver" {
  default = "latest"
}