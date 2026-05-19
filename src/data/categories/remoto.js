const REMOTO = {
    "category": "Remoto",
    "description": "Acceso remoto, asistencia técnica, gateways y administración segura de endpoints.",
    "tools": [
      {
        "name": "AnyDesk",
        "learning": "Baja",
        "description": "Acceso remoto multiplataforma para soporte rápido, asistencia desatendida y transferencia básica de archivos.",
        "pros": [
          "Muy fácil de usar",
          "Rendimiento fluido",
          "Adecuado para soporte externo"
        ],
        "cons": [
          "Riesgo si no se controla acceso",
          "Debe gestionarse MFA y listas permitidas"
        ],
        "tip": "Configura permisos mínimos y registra sesiones.",
        "resources": {
          "official": "https://anydesk.com/",
          "download": "https://anydesk.com/en/downloads",
          "docs": "https://support.anydesk.com/",
          "community": "https://support.anydesk.com/",
          "learn": "https://support.anydesk.com/knowledge"
        }
      },
      {
        "name": "TeamViewer",
        "learning": "Baja",
        "description": "Plataforma de soporte remoto, acceso desatendido, reuniones y administración de dispositivos.",
        "pros": [
          "Muy conocido",
          "Funciona bien tras NAT",
          "Gestión centralizada"
        ],
        "cons": [
          "Coste notable",
          "Objetivo de abuso si se configura mal"
        ],
        "tip": "Activa MFA y revisa dispositivos autorizados.",
        "resources": {
          "official": "https://www.teamviewer.com/",
          "download": "https://www.teamviewer.com/en/download/",
          "docs": "https://www.teamviewer.com/en/global/support/knowledge-base/",
          "community": "https://community.teamviewer.com/",
          "learn": "https://www.teamviewer.com/en/global/support/academy/"
        }
      },
      {
        "name": "RustDesk",
        "learning": "Media",
        "description": "Alternativa open source de escritorio remoto con opción de servidores propios de relay y rendezvous.",
        "pros": [
          "Puede autoalojarse",
          "Control de infraestructura",
          "Buena alternativa económica"
        ],
        "cons": [
          "Requiere operar servidor para máximo control",
          "Menor ecosistema empresarial"
        ],
        "tip": "Despliega servidor propio si necesitas soberanía de tráfico.",
        "resources": {
          "official": "https://rustdesk.com/",
          "download": "https://rustdesk.com/",
          "docs": "https://rustdesk.com/docs/",
          "community": "https://github.com/rustdesk/rustdesk/discussions",
          "learn": "https://rustdesk.com/docs/en/self-host/"
        }
      },
      {
        "name": "Apache Guacamole",
        "learning": "Alta",
        "description": "Gateway remoto clientless vía navegador para RDP, SSH y VNC con autenticación centralizada.",
        "pros": [
          "Sin cliente local",
          "Centraliza accesos",
          "Integrable con LDAP/SSO"
        ],
        "cons": [
          "Exponerlo mal es crítico",
          "Requiere hardening y reverse proxy"
        ],
        "tip": "Colócalo detrás de VPN/SSO y registra sesiones.",
        "resources": {
          "official": "https://guacamole.apache.org/",
          "download": "https://guacamole.apache.org/releases/",
          "docs": "https://guacamole.apache.org/doc/gug/",
          "community": "https://guacamole.apache.org/support/",
          "learn": "https://guacamole.apache.org/doc/gug/"
        }
      },
      {
        "name": "Royal TS / Royal TSX",
        "learning": "Media",
        "description": "Gestor profesional de conexiones RDP, SSH, VNC, web y credenciales para administradores.",
        "pros": [
          "Organización excelente",
          "Soporta credenciales compartidas",
          "Multi-protocolo"
        ],
        "cons": [
          "Producto comercial",
          "Requiere gobernanza de credenciales"
        ],
        "tip": "Usa documentos compartidos con permisos para equipos de soporte.",
        "resources": {
          "official": "https://www.royalapps.com/ts/win/features",
          "download": "https://www.royalapps.com/ts/win/download",
          "docs": "https://docs.royalapps.com/",
          "community": "https://support.royalapps.com/support/discussions",
          "learn": "https://docs.royalapps.com/"
        }
      },
      {
        "name": "Windows Admin Center",
        "learning": "Media",
        "description": "Consola web de Microsoft para administrar Windows Server, Hyper-V, clusters, eventos y roles.",
        "pros": [
          "Administración moderna vía navegador",
          "Muy útil en Windows",
          "Reduce dependencia de MMCs"
        ],
        "cons": [
          "No cubre todo",
          "Extensiones y permisos requieren ajuste"
        ],
        "tip": "Instálalo como gateway controlado para evitar exponer RDP.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/windows-server/manage/windows-admin-center/overview",
          "download": "https://learn.microsoft.com/en-us/windows-server/manage/windows-admin-center/deploy/install",
          "docs": "https://learn.microsoft.com/en-us/windows-server/manage/windows-admin-center/",
          "community": "https://techcommunity.microsoft.com/category/windows-server",
          "learn": "https://learn.microsoft.com/en-us/training/"
        }
      }
    ]
  };

export default REMOTO;
