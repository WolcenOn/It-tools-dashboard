const DIAGNOSTICO = {
    "category": "Diagnóstico",
    "description": "Identificación de fallos de hardware, sistema operativo, procesos, logs y estabilidad.",
    "tools": [
      {
        "name": "Sysinternals Suite",
        "learning": "Media",
        "description": "Suite de Microsoft para análisis avanzado de procesos, arranque, registro, handles, red y actividad del sistema Windows.",
        "pros": [
          "Herramientas portables y muy precisas",
          "Imprescindible para troubleshooting Windows",
          "Excelente para análisis de persistencia y procesos"
        ],
        "cons": [
          "Puede intimidar a perfiles junior",
          "La interpretación de Procmon requiere práctica"
        ],
        "tip": "Empieza por Process Explorer, Autoruns y Procmon; cubren la mayoría de incidencias Windows.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/sysinternals/",
          "download": "https://learn.microsoft.com/en-us/sysinternals/downloads/",
          "docs": "https://learn.microsoft.com/en-us/sysinternals/",
          "community": "https://techcommunity.microsoft.com/",
          "learn": "https://learn.microsoft.com/en-us/training/"
        }
      },
      {
        "name": "HWiNFO",
        "learning": "Baja",
        "description": "Inventario y monitorización de sensores de hardware: temperaturas, voltajes, SMART, buses, memoria, CPU y GPU.",
        "pros": [
          "Lectura de sensores muy completa",
          "Logging útil en pruebas de carga",
          "Ideal para diagnóstico térmico"
        ],
        "cons": [
          "Demasiadas métricas para usuarios novatos",
          "Algunos sensores dependen de la placa base"
        ],
        "tip": "Activa el logging durante benchmarks para correlacionar temperatura, throttling y estabilidad.",
        "resources": {
          "official": "https://www.hwinfo.com/",
          "download": "https://www.hwinfo.com/download/",
          "docs": "https://www.hwinfo.com/forum/",
          "community": "https://www.hwinfo.com/forum/",
          "learn": "https://www.hwinfo.com/forum/threads/guide-how-to-use-hwinfo.7612/"
        }
      },
      {
        "name": "CrystalDiskInfo",
        "learning": "Baja",
        "description": "Utilidad para revisar estado SMART, temperatura, horas de uso y salud de discos HDD, SSD y NVMe.",
        "pros": [
          "Rápida para triage de almacenamiento",
          "Interfaz muy clara",
          "Buena para detectar síntomas SMART"
        ],
        "cons": [
          "SMART no predice todos los fallos",
          "No sustituye pruebas extendidas del fabricante"
        ],
        "tip": "Mira sectores reasignados, errores no corregibles y porcentaje de vida restante en SSD.",
        "resources": {
          "official": "https://crystalmark.info/en/software/crystaldiskinfo/",
          "download": "https://crystalmark.info/en/download/",
          "docs": "https://crystalmark.info/en/software/crystaldiskinfo/",
          "community": "https://github.com/hiyohiyo/CrystalDiskInfo",
          "learn": "https://crystalmark.info/en/software/crystaldiskinfo/"
        }
      },
      {
        "name": "MemTest86",
        "learning": "Media",
        "description": "Sistema booteable para probar memoria RAM fuera del sistema operativo mediante patrones intensivos.",
        "pros": [
          "Excelente para fallos intermitentes de RAM",
          "Independiente del sistema operativo",
          "Útil en equipos críticos"
        ],
        "cons": [
          "Las pruebas pueden tardar horas",
          "Errores pueden depender de perfiles XMP/EXPO"
        ],
        "tip": "Ejecuta varias pasadas y prueba también con perfiles de memoria por defecto.",
        "resources": {
          "official": "https://www.memtest86.com/",
          "download": "https://www.memtest86.com/download.htm",
          "docs": "https://www.memtest86.com/tech_support.html",
          "community": "https://forums.passmark.com/memtest86/",
          "learn": "https://www.memtest86.com/tech_support.html"
        }
      },
      {
        "name": "Event Viewer",
        "learning": "Media",
        "description": "Consola nativa de Windows para revisar logs de sistema, seguridad, aplicaciones, servicios y eventos personalizados.",
        "pros": [
          "Fuente oficial de eventos Windows",
          "Permite filtros por ID y origen",
          "Clave para auditoría básica"
        ],
        "cons": [
          "Mucho ruido en entornos reales",
          "Mensajes a veces crípticos"
        ],
        "tip": "Crea vistas personalizadas por IDs recurrentes para acelerar diagnósticos.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/shows/inside/event-viewer",
          "download": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/eventcreate",
          "docs": "https://learn.microsoft.com/en-us/windows/win32/eventlog/event-logging",
          "community": "https://learn.microsoft.com/en-us/answers/",
          "learn": "https://learn.microsoft.com/en-us/training/"
        }
      },
      {
        "name": "OpenHardwareMonitor",
        "learning": "Baja",
        "description": "Monitor open source de sensores de hardware, temperaturas, ventiladores, voltajes y carga de CPU/GPU.",
        "pros": [
          "Ligero y portable",
          "Código abierto",
          "Suficiente para lecturas rápidas"
        ],
        "cons": [
          "Compatibilidad irregular con hardware nuevo",
          "Menos actualizado que alternativas modernas"
        ],
        "tip": "Úsalo como opción simple cuando solo necesitas lectura rápida de sensores.",
        "resources": {
          "official": "https://openhardwaremonitor.org/",
          "download": "https://openhardwaremonitor.org/downloads/",
          "docs": "https://openhardwaremonitor.org/documentation/",
          "community": "https://github.com/openhardwaremonitor/openhardwaremonitor",
          "learn": "https://openhardwaremonitor.org/documentation/"
        }
      }
    ]
  };

export default DIAGNOSTICO;
