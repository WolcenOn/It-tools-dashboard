const CONTENEDORES = {
    "category": "Contenedores",
    "description": "Construcción, ejecución, orquestación y administración de aplicaciones contenerizadas.",
    "tools": [
      {
        "name": "Docker",
        "learning": "Media",
        "description": "Plataforma estándar para construir y ejecutar contenedores con imágenes reproducibles y redes aisladas.",
        "pros": [
          "Gran ecosistema",
          "Facilita despliegues reproducibles",
          "Excelente para desarrollo y servicios ligeros"
        ],
        "cons": [
          "Seguridad depende de imágenes y permisos",
          "Persistencia y redes requieren diseño"
        ],
        "tip": "Evita ejecutar contenedores como root y fija versiones de imágenes.",
        "resources": {
          "official": "https://www.docker.com/",
          "download": "https://www.docker.com/get-started/",
          "docs": "https://docs.docker.com/",
          "community": "https://forums.docker.com/",
          "learn": "https://docs.docker.com/get-started/"
        }
      },
      {
        "name": "Docker Compose",
        "learning": "Media",
        "description": "Definición YAML para levantar stacks multi-contenedor con redes, volúmenes y variables.",
        "pros": [
          "Simple para entornos pequeños",
          "Muy legible",
          "Ideal para labs y servicios internos"
        ],
        "cons": [
          "No reemplaza orquestación avanzada",
          "Gestión multi-host limitada"
        ],
        "tip": "Separa variables sensibles en .env y no subas secretos al repositorio.",
        "resources": {
          "official": "https://docs.docker.com/compose/",
          "download": "https://docs.docker.com/compose/install/",
          "docs": "https://docs.docker.com/compose/",
          "community": "https://forums.docker.com/",
          "learn": "https://docs.docker.com/compose/gettingstarted/"
        }
      },
      {
        "name": "Kubernetes",
        "learning": "Alta",
        "description": "Orquestador de contenedores para despliegues escalables, auto-recuperación y workloads distribuidos.",
        "pros": [
          "Estándar cloud-native",
          "Escalabilidad y resiliencia",
          "Ecosistema enorme"
        ],
        "cons": [
          "Complejidad alta",
          "Operarlo bien exige observabilidad y seguridad"
        ],
        "tip": "Aprende namespaces, deployments, services, ingress, RBAC y storage classes.",
        "resources": {
          "official": "https://kubernetes.io/",
          "download": "https://kubernetes.io/releases/download/",
          "docs": "https://kubernetes.io/docs/home/",
          "community": "https://kubernetes.io/community/",
          "learn": "https://kubernetes.io/docs/tutorials/"
        }
      },
      {
        "name": "Podman",
        "learning": "Media",
        "description": "Motor de contenedores daemonless compatible con flujos Docker y rootless containers.",
        "pros": [
          "Rootless por diseño",
          "Comandos similares a Docker",
          "Bueno en Linux seguro"
        ],
        "cons": [
          "Menor adopción en algunos equipos",
          "Diferencias sutiles pueden romper scripts"
        ],
        "tip": "Útil cuando necesitas contenedores sin daemon privilegiado permanente.",
        "resources": {
          "official": "https://podman.io/",
          "download": "https://podman.io/getting-started/installation",
          "docs": "https://docs.podman.io/",
          "community": "https://github.com/containers/podman/discussions",
          "learn": "https://podman.io/docs"
        }
      },
      {
        "name": "Portainer",
        "learning": "Baja",
        "description": "Interfaz web para administrar Docker, Swarm, Kubernetes y entornos edge.",
        "pros": [
          "Reduce fricción operativa",
          "Bueno para equipos pequeños",
          "Gestión visual de stacks"
        ],
        "cons": [
          "No elimina necesidad de entender runtime",
          "Puede ocultar detalles importantes"
        ],
        "tip": "Consérvalo como capa visual, pero versiona compose/IaC.",
        "resources": {
          "official": "https://www.portainer.io/",
          "download": "https://docs.portainer.io/start/install-ce",
          "docs": "https://docs.portainer.io/",
          "community": "https://portal.portainer.io/",
          "learn": "https://www.portainer.io/academy"
        }
      },
      {
        "name": "Rancher",
        "learning": "Alta",
        "description": "Plataforma para gestionar múltiples clusters Kubernetes, usuarios, políticas y operaciones centralizadas.",
        "pros": [
          "Muy útil multi-cluster",
          "Gestión RBAC central",
          "Facilita operaciones Kubernetes"
        ],
        "cons": [
          "Otra capa que mantener",
          "Requiere arquitectura fiable"
        ],
        "tip": "Separa cluster de gestión y clusters gestionados.",
        "resources": {
          "official": "https://www.rancher.com/",
          "download": "https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade",
          "docs": "https://ranchermanager.docs.rancher.com/",
          "community": "https://forums.rancher.com/",
          "learn": "https://www.rancher.com/quick-start"
        }
      }
    ]
  };

export default CONTENEDORES;
