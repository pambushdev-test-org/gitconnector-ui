terraform {
  #required_version = "~>0.12"
  backend "remote" {
    organization = "pambushdev-org"
    workspaces {
      name = "gke-cluster-test"
    }
  }
}

resource "google_container_cluster" "primary" {
  name               = var.cluster
  location           = var.zone
  initial_node_count = 1

  master_auth {
    client_certificate_config {
      issue_client_certificate = false
    }
  }

  node_config {
    preemptible  = true
    machine_type = var.machine_type
    oauth_scopes = [
      "https://www.googleapis.com/auth/logging.write",
      "https://www.googleapis.com/auth/monitoring",
    ]

    metadata = {
      disable-legacy-endpoints = "true"
    }

    labels = {
      app = var.app_name
    }

    tags = ["app", var.app_name]
  }

  timeouts {
    create = "30m"
    update = "40m"
  }
}