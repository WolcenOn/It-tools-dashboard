const AUTOMATIZACION = {
    "category": "Automatización",
    "description": "Scripting, configuración, CI/CD, infraestructura como código y operaciones repetibles.",
    "tools": [
      {
        "name": "Ansible",
        "learning": "Media",
        "description": "Automatización agentless para configuración, despliegue y tareas administrativas mediante playbooks YAML.",
        "pros": [
          "Sin agentes",
          "Legible",
          "Muy bueno para configuración repetible"
        ],
        "cons": [
          "YAML puede crecer desordenado",
          "La idempotencia requiere cuidado"
        ],
        "tip": "Organiza roles, inventarios y variables por entorno desde el principio.",
        "resources": {
          "official": "https://www.ansible.com/",
          "download": "https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html",
          "docs": "https://docs.ansible.com/",
          "community": "https://forum.ansible.com/",
          "learn": "https://docs.ansible.com/ansible/latest/getting_started/index.html"
        }
      },
      {
        "name": "Terraform",
        "learning": "Alta",
        "description": "Infraestructura como código para crear y gestionar recursos cloud, redes, DNS, Kubernetes y servicios externos.",
        "pros": [
          "Declarativo y reproducible",
          "Amplio soporte de providers",
          "Plan/apply reduce cambios ciegos"
        ],
        "cons": [
          "Gestión de estado crítica",
          "Refactors pueden ser delicados"
        ],
        "tip": "Protege el state remoto con bloqueo y control de acceso.",
        "resources": {
          "official": "https://developer.hashicorp.com/terraform",
          "download": "https://developer.hashicorp.com/terraform/downloads",
          "docs": "https://developer.hashicorp.com/terraform/docs",
          "community": "https://discuss.hashicorp.com/c/terraform-core/27",
          "learn": "https://developer.hashicorp.com/terraform/tutorials"
        }
      },
      {
        "name": "PowerShell",
        "learning": "Media",
        "description": "Shell y lenguaje de automatización orientado a objetos, esencial para Windows, Microsoft 365, Azure y administración híbrida.",
        "pros": [
          "Muy potente en Windows",
          "Pipeline de objetos",
          "Gran soporte administrativo"
        ],
        "cons": [
          "Scripts inseguros pueden impactar mucho",
          "Requiere política de ejecución"
        ],
        "tip": "Usa -WhatIf, -Confirm y transcript logs en cambios masivos.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/powershell/",
          "download": "https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell",
          "docs": "https://learn.microsoft.com/en-us/powershell/scripting/overview",
          "community": "https://github.com/PowerShell/PowerShell/discussions",
          "learn": "https://learn.microsoft.com/en-us/training/modules/introduction-to-powershell/"
        }
      },
      {
        "name": "Jenkins",
        "learning": "Alta",
        "description": "Servidor de automatización CI/CD extensible mediante plugins, pipelines y agentes.",
        "pros": [
          "Muy flexible",
          "Ecosistema enorme",
          "Adecuado para pipelines personalizados"
        ],
        "cons": [
          "Mantenimiento de plugins complejo",
          "Seguridad requiere atención"
        ],
        "tip": "Usa Jenkinsfile versionado y revisa permisos de credenciales periódicamente.",
        "resources": {
          "official": "https://www.jenkins.io/",
          "download": "https://www.jenkins.io/download/",
          "docs": "https://www.jenkins.io/doc/",
          "community": "https://community.jenkins.io/",
          "learn": "https://www.jenkins.io/doc/tutorials/"
        }
      },
      {
        "name": "GitHub Actions",
        "learning": "Media",
        "description": "Automatización CI/CD integrada en GitHub para tests, builds, despliegues y tareas programadas.",
        "pros": [
          "Integración directa con repos",
          "Marketplace amplio",
          "Fácil para pipelines modernos"
        ],
        "cons": [
          "Costes/minutos en proyectos grandes",
          "Riesgo con secretos y actions de terceros"
        ],
        "tip": "Fija versiones de actions y limita permisos con permissions: least privilege.",
        "resources": {
          "official": "https://github.com/features/actions",
          "download": "https://docs.github.com/en/actions",
          "docs": "https://docs.github.com/en/actions",
          "community": "https://github.community/",
          "learn": "https://skills.github.com/"
        }
      },
      {
        "name": "Salt Project",
        "learning": "Alta",
        "description": "Automatización y configuración remota basada en estados, eventos y ejecución masiva.",
        "pros": [
          "Potente a escala",
          "Arquitectura orientada a eventos",
          "Rápido para ejecución remota"
        ],
        "cons": [
          "Curva alta",
          "Menos popular que Ansible en muchos equipos"
        ],
        "tip": "Aprovecha grains y pillars para segmentar configuración.",
        "resources": {
          "official": "https://saltproject.io/",
          "download": "https://docs.saltproject.io/salt/install-guide/en/latest/",
          "docs": "https://docs.saltproject.io/",
          "community": "https://saltproject.io/community/",
          "learn": "https://docs.saltproject.io/en/getstarted/"
        }
      }
    ]
  };

export default AUTOMATIZACION;
