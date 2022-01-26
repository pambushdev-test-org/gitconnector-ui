resource "kubernetes_service" "app" {
  metadata {
    name = var.app
  }
  spec {
    selector = {
      app = kubernetes_deployment.app.metadata.0.labels.app
    }
    port {
      name        = "tcp80"
      port        = 80
      target_port = 80
    }
    port {
      name        = "tcp8080"
      port        = 8080
      target_port = 80
    }
    type = "LoadBalancer"
  }
} 