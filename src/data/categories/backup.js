const BACKUP = {
    "category": "Backup",
    "description": "Protección de datos, recuperación, retención, snapshots, deduplicación e inmutabilidad.",
    "tools": [
      {
        "name": "Veeam Backup & Replication",
        "learning": "Media",
        "description": "Plataforma empresarial para backup, replicación y recuperación de VMs, servidores, NAS y workloads cloud.",
        "pros": [
          "Muy fuerte en virtualización",
          "Restauraciones granulares",
          "Buenas opciones de inmutabilidad"
        ],
        "cons": [
          "Licenciamiento requiere planificación",
          "Puede consumir bastante almacenamiento"
        ],
        "tip": "Aplica regla 3-2-1-1-0 y verifica restauraciones.",
        "resources": {
          "official": "https://www.veeam.com/products/veeam-data-platform.html",
          "download": "https://www.veeam.com/downloads.html",
          "docs": "https://helpcenter.veeam.com/",
          "community": "https://forums.veeam.com/",
          "learn": "https://www.veeam.com/university.html"
        }
      },
      {
        "name": "Proxmox Backup Server",
        "learning": "Media",
        "description": "Backup deduplicado e incremental para Proxmox VE con verificación, cifrado y retención eficiente.",
        "pros": [
          "Deduplicación eficiente",
          "Integración excelente con Proxmox",
          "Verificación de backups"
        ],
        "cons": [
          "Más específico para Proxmox",
          "El storage sigue siendo crítico"
        ],
        "tip": "Programa verify jobs para detectar corrupción antes de necesitar restaurar.",
        "resources": {
          "official": "https://www.proxmox.com/en/proxmox-backup-server",
          "download": "https://www.proxmox.com/en/downloads",
          "docs": "https://pbs.proxmox.com/docs/",
          "community": "https://forum.proxmox.com/",
          "learn": "https://pbs.proxmox.com/docs/"
        }
      },
      {
        "name": "BorgBackup",
        "learning": "Media",
        "description": "Backup deduplicado, comprimido y cifrado desde línea de comandos, muy usado en Linux.",
        "pros": [
          "Eficiente y seguro",
          "Ideal para servidores",
          "Retención flexible"
        ],
        "cons": [
          "CLI no apta para todos",
          "Restauración debe probarse"
        ],
        "tip": "Usa borgmatic para simplificar configuración, hooks y retención.",
        "resources": {
          "official": "https://www.borgbackup.org/",
          "download": "https://borgbackup.readthedocs.io/en/stable/installation.html",
          "docs": "https://borgbackup.readthedocs.io/",
          "community": "https://github.com/borgbackup/borg/discussions",
          "learn": "https://borgbackup.readthedocs.io/en/stable/quickstart.html"
        }
      },
      {
        "name": "Restic",
        "learning": "Media",
        "description": "Backup moderno, cifrado y deduplicado compatible con S3, SFTP, local y cloud.",
        "pros": [
          "Muy portable",
          "Cifrado por defecto",
          "Backends variados"
        ],
        "cons": [
          "Sin GUI oficial completa",
          "Gestión de repos exige disciplina"
        ],
        "tip": "Automatiza snapshots y forget/prune con logs revisables.",
        "resources": {
          "official": "https://restic.net/",
          "download": "https://restic.readthedocs.io/en/stable/020_installation.html",
          "docs": "https://restic.readthedocs.io/",
          "community": "https://forum.restic.net/",
          "learn": "https://restic.readthedocs.io/en/stable/010_introduction.html"
        }
      },
      {
        "name": "Duplicati",
        "learning": "Baja",
        "description": "Backup con interfaz web, cifrado y soporte para destinos cloud y locales.",
        "pros": [
          "Fácil de configurar",
          "Muchos destinos",
          "Adecuado para estaciones y pequeños servidores"
        ],
        "cons": [
          "No ideal para entornos críticos sin pruebas",
          "La base local debe cuidarse"
        ],
        "tip": "Haz pruebas reales de restauración, no solo de ejecución.",
        "resources": {
          "official": "https://www.duplicati.com/",
          "download": "https://www.duplicati.com/download",
          "docs": "https://docs.duplicati.com/",
          "community": "https://forum.duplicati.com/",
          "learn": "https://docs.duplicati.com/getting-started"
        }
      },
      {
        "name": "Acronis Cyber Protect",
        "learning": "Media",
        "description": "Suite de backup y protección endpoint con funciones de ciberseguridad y gestión centralizada.",
        "pros": [
          "Backup + seguridad",
          "Interfaz integrada",
          "Orientado a MSP y empresa"
        ],
        "cons": [
          "Puede ser pesado",
          "Coste superior a opciones simples"
        ],
        "tip": "Evalúa si necesitas la parte cyber o solo backup.",
        "resources": {
          "official": "https://www.acronis.com/en-us/products/cyber-protect/",
          "download": "https://www.acronis.com/en-us/support/updates/",
          "docs": "https://www.acronis.com/en-us/support/documentation/",
          "community": "https://forum.acronis.com/",
          "learn": "https://www.acronis.com/en-us/training/"
        }
      }
    ]
  };

export default BACKUP;
