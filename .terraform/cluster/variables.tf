variable "project" {
  description = "GCP Project Name"
}

variable "machine_type" {
  description = "Machine type for GCP cluster"
  default     = "g1-small"
}

variable "credentials_file" {
  description = "GCP creds"
  default     = "~/.gcloud_keys/gcp-test-project-328901-2dbaecb7ed34.json"
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

variable "node_pool_name" {
  default = "pool-gitconnector-ui"
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