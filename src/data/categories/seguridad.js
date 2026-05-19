const SEGURIDAD = {
    "category": "Seguridad",
    "description": "Hardening, vulnerabilidades, EDR, secretos, auditoría, detección y respuesta.",
    "tools": [
      {
        "name": "Microsoft Defender for Endpoint",
        "learning": "Alta",
        "description": "Plataforma EDR/XDR para protección endpoint, investigación, hunting avanzado y respuesta.",
        "pros": [
          "Integración fuerte con Microsoft 365",
          "Hunting con KQL",
          "Buena visibilidad centralizada"
        ],
        "cons": [
          "Licenciamiento complejo",
          "Requiere tuning para reducir ruido"
        ],
        "tip": "Crea consultas KQL reutilizables para PowerShell sospechoso, persistencia y rutas temporales.",
        "resources": {
          "official": "https://www.microsoft.com/en-us/security/business/endpoint-security/microsoft-defender-endpoint",
          "download": "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/onboarding",
          "docs": "https://learn.microsoft.com/en-us/microsoft-365/security/defender-endpoint/",
          "community": "https://techcommunity.microsoft.com/category/microsoft-defender-for-endpoint",
          "learn": "https://learn.microsoft.com/en-us/training/paths/m365-security/"
        }
      },
      {
        "name": "Bitwarden",
        "learning": "Baja",
        "description": "Gestor de contraseñas y secretos para usuarios y equipos, con bóvedas, MFA y opciones empresariales.",
        "pros": [
          "Facilita contraseñas únicas",
          "Buena relación coste/función",
          "Opciones self-hosted"
        ],
        "cons": [
          "Requiere disciplina operativa",
          "La recuperación debe planificarse"
        ],
        "tip": "Activa MFA, políticas de organización y colecciones por rol.",
        "resources": {
          "official": "https://bitwarden.com/",
          "download": "https://bitwarden.com/download/",
          "docs": "https://bitwarden.com/help/",
          "community": "https://community.bitwarden.com/",
          "learn": "https://bitwarden.com/learning/"
        }
      },
      {
        "name": "Greenbone / OpenVAS",
        "learning": "Alta",
        "description": "Escáner de vulnerabilidades para detectar servicios expuestos, CVEs y configuraciones débiles.",
        "pros": [
          "Open source en su base",
          "Cobertura amplia",
          "Útil para auditorías internas"
        ],
        "cons": [
          "Requiere mantenimiento",
          "Resultados necesitan validación manual"
        ],
        "tip": "Programa escaneos autenticados para mejorar precisión.",
        "resources": {
          "official": "https://www.greenbone.net/",
          "download": "https://greenbone.github.io/docs/latest/",
          "docs": "https://greenbone.github.io/docs/latest/",
          "community": "https://forum.greenbone.net/",
          "learn": "https://greenbone.github.io/docs/latest/"
        }
      },
      {
        "name": "Lynis",
        "learning": "Media",
        "description": "Auditor de seguridad para Linux, Unix y macOS centrado en hardening y buenas prácticas.",
        "pros": [
          "Rápido y scriptable",
          "Bueno para baseline",
          "Recomendaciones accionables"
        ],
        "cons": [
          "No sustituye auditoría completa",
          "Algunas recomendaciones dependen del contexto"
        ],
        "tip": "Inclúyelo en revisiones periódicas de servidores Linux.",
        "resources": {
          "official": "https://cisofy.com/lynis/",
          "download": "https://cisofy.com/documentation/lynis/get-started/",
          "docs": "https://cisofy.com/documentation/lynis/",
          "community": "https://github.com/CISOfy/lynis",
          "learn": "https://cisofy.com/documentation/lynis/"
        }
      },
      {
        "name": "YARA",
        "learning": "Alta",
        "description": "Motor de reglas para identificar patrones en malware, binarios, memoria o archivos sospechosos.",
        "pros": [
          "Muy potente para detección personalizada",
          "Usado en threat hunting",
          "Reglas compartibles"
        ],
        "cons": [
          "Requiere conocimiento de patrones",
          "Reglas malas generan ruido"
        ],
        "tip": "Empieza con reglas simples por strings, imports y condiciones.",
        "resources": {
          "official": "https://virustotal.github.io/yara/",
          "download": "https://github.com/VirusTotal/yara/releases",
          "docs": "https://yara.readthedocs.io/",
          "community": "https://github.com/VirusTotal/yara",
          "learn": "https://yara.readthedocs.io/en/stable/writingrules.html"
        }
      },
      {
        "name": "Wazuh",
        "learning": "Alta",
        "description": "Plataforma open source XDR/SIEM con agentes, logs, integridad de archivos, compliance y alertas.",
        "pros": [
          "Muy completo",
          "Integración con agentes",
          "Bueno para visibilidad multi-host"
        ],
        "cons": [
          "Necesita arquitectura y mantenimiento",
          "Afinar reglas lleva tiempo"
        ],
        "tip": "Define grupos por tipo de servidor para aplicar reglas diferenciadas.",
        "resources": {
          "official": "https://wazuh.com/",
          "download": "https://documentation.wazuh.com/current/quickstart.html",
          "docs": "https://documentation.wazuh.com/",
          "community": "https://wazuh.com/community/",
          "learn": "https://wazuh.com/resources/"
        }
      }
    ]
  };

export default SEGURIDAD;
