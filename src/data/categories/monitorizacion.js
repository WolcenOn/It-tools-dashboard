const MONITORIZACION = {
    "category": "Monitorización",
    "description": "Métricas, logs, disponibilidad, alertas, dashboards y observabilidad.",
    "tools": [
      {
        "name": "Grafana",
        "learning": "Media",
        "description": "Plataforma de dashboards y visualización para métricas, logs y trazas desde múltiples fuentes.",
        "pros": [
          "Dashboards flexibles",
          "Gran ecosistema de plugins",
          "Excelente para NOC/SRE"
        ],
        "cons": [
          "No recolecta todo por sí sola",
          "Diseñar buenos dashboards requiere criterio"
        ],
        "tip": "Agrupa paneles por servicio y usa variables por entorno, host o región.",
        "resources": {
          "official": "https://grafana.com/",
          "download": "https://grafana.com/grafana/download",
          "docs": "https://grafana.com/docs/",
          "community": "https://grafana.com/community/",
          "learn": "https://grafana.com/tutorials/"
        }
      },
      {
        "name": "Prometheus",
        "learning": "Alta",
        "description": "Sistema de métricas time-series con scraping, PromQL y alerting, estándar cloud-native.",
        "pros": [
          "Modelo robusto para métricas",
          "PromQL muy expresivo",
          "Estándar en Kubernetes"
        ],
        "cons": [
          "Cardinalidad puede degradar rendimiento",
          "No es ideal para logs"
        ],
        "tip": "Controla labels de alta cardinalidad antes de crecer.",
        "resources": {
          "official": "https://prometheus.io/",
          "download": "https://prometheus.io/download/",
          "docs": "https://prometheus.io/docs/introduction/overview/",
          "community": "https://prometheus.io/community/",
          "learn": "https://prometheus.io/docs/tutorials/"
        }
      },
      {
        "name": "Zabbix",
        "learning": "Alta",
        "description": "Suite completa para monitorizar servidores, redes, SNMP, agentes, plantillas y alertas.",
        "pros": [
          "Muy completo on-prem",
          "Buenas plantillas",
          "Escalable con proxies"
        ],
        "cons": [
          "Interfaz densa",
          "Requiere diseño inicial cuidadoso"
        ],
        "tip": "Usa discovery rules y plantillas para evitar configuración manual host a host.",
        "resources": {
          "official": "https://www.zabbix.com/",
          "download": "https://www.zabbix.com/download",
          "docs": "https://www.zabbix.com/documentation/current/en/manual",
          "community": "https://www.zabbix.com/forum/",
          "learn": "https://www.zabbix.com/training"
        }
      },
      {
        "name": "Nagios Core",
        "learning": "Media",
        "description": "Sistema clásico de monitorización basado en checks, plugins, estados y notificaciones.",
        "pros": [
          "Muy probado",
          "Gran cantidad de plugins",
          "Modelo simple de checks"
        ],
        "cons": [
          "Configuración tradicional pesada",
          "Menos moderno para observabilidad avanzada"
        ],
        "tip": "Útil para checks discretos de disponibilidad y servicios críticos.",
        "resources": {
          "official": "https://www.nagios.org/projects/nagios-core/",
          "download": "https://www.nagios.org/downloads/nagios-core/",
          "docs": "https://assets.nagios.com/downloads/nagioscore/docs/nagioscore/4/en/",
          "community": "https://support.nagios.com/forum/",
          "learn": "https://www.nagios.org/documentation/"
        }
      },
      {
        "name": "Datadog",
        "learning": "Media",
        "description": "Plataforma SaaS de observabilidad para infraestructura, APM, logs, seguridad y experiencia digital.",
        "pros": [
          "Time-to-value rápido",
          "Integraciones abundantes",
          "Buena correlación de señales"
        ],
        "cons": [
          "Coste puede crecer mucho",
          "Dependencia SaaS"
        ],
        "tip": "Define límites de ingesta y retención desde el inicio.",
        "resources": {
          "official": "https://www.datadoghq.com/",
          "download": "https://docs.datadoghq.com/agent/",
          "docs": "https://docs.datadoghq.com/",
          "community": "https://community.datadoghq.com/",
          "learn": "https://learn.datadoghq.com/"
        }
      },
      {
        "name": "Uptime Kuma",
        "learning": "Baja",
        "description": "Monitor de disponibilidad self-hosted para HTTP, TCP, ping, DNS y notificaciones.",
        "pros": [
          "Fácil de desplegar",
          "Interfaz moderna",
          "Ideal para pequeños equipos"
        ],
        "cons": [
          "No sustituye observabilidad completa",
          "Escalabilidad limitada frente a suites mayores"
        ],
        "tip": "Perfecto para una página de estado interna de servicios esenciales.",
        "resources": {
          "official": "https://uptime.kuma.pet/",
          "download": "https://github.com/louislam/uptime-kuma",
          "docs": "https://github.com/louislam/uptime-kuma/wiki",
          "community": "https://github.com/louislam/uptime-kuma/discussions",
          "learn": "https://github.com/louislam/uptime-kuma/wiki"
        }
      }
    ]
  };

export default MONITORIZACION;
