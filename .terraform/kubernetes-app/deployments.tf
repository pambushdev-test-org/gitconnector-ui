resource "kubernetes_deployment" "app" {
  metadata {
    name = var.app
    labels = {
      app = var.app
    }
  }
  spec {
    replicas = 1

    selector {
      match_labels = {
        app = var.app
      }
    }
    template {
      metadata {
        labels = {
          app = var.app
        }
      }
      spec {
        container {
          image = var.docker-image
          name  = var.app
          port {
            name           = "port-5000"
            container_port = 5000
          }

          resources {
            limits = {
              cpu = "0.5"
              mem = "128Mi"
            }

            requests = {
              cpu = "0.5"
              mem = "128Mi"
            }
          }
        }
      }
    }
  }
}