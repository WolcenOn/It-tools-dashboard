const REPARACION = {
    "category": "Reparación",
    "description": "Rescate, recuperación, limpieza, reparación de arranque y soporte de campo.",
    "tools": [
      {
        "name": "Hiren's BootCD PE",
        "learning": "Media",
        "description": "Entorno Windows PE con utilidades de diagnóstico, particiones, recuperación, hardware y reparación.",
        "pros": [
          "Completo para soporte presencial",
          "Arranque independiente",
          "Incluye muchas utilidades"
        ],
        "cons": [
          "Debe descargarse de fuentes legítimas",
          "No todo aplica a empresa"
        ],
        "tip": "Mantén un USB actualizado y documenta herramientas permitidas.",
        "resources": {
          "official": "https://www.hirensbootcd.org/",
          "download": "https://www.hirensbootcd.org/download/",
          "docs": "https://www.hirensbootcd.org/howtos/",
          "community": "https://www.hirensbootcd.org/forum/",
          "learn": "https://www.hirensbootcd.org/howtos/"
        }
      },
      {
        "name": "Rescuezilla",
        "learning": "Baja",
        "description": "Herramienta gráfica de backup, restauración y clonado compatible con imágenes Clonezilla.",
        "pros": [
          "Más amigable que Clonezilla",
          "Ideal para técnicos de campo",
          "Soporta exploración de imágenes"
        ],
        "cons": [
          "Menos flexible que CLI avanzada",
          "No es backup continuo"
        ],
        "tip": "Captura imagen antes de reparaciones invasivas.",
        "resources": {
          "official": "https://rescuezilla.com/",
          "download": "https://rescuezilla.com/download",
          "docs": "https://rescuezilla.com/help",
          "community": "https://github.com/rescuezilla/rescuezilla/discussions",
          "learn": "https://rescuezilla.com/help"
        }
      },
      {
        "name": "Malwarebytes",
        "learning": "Baja",
        "description": "Antimalware orientado a detección y limpieza de amenazas comunes, PUPs y adware.",
        "pros": [
          "Fácil de usar",
          "Bueno para limpieza bajo demanda",
          "Detecta adware frecuente"
        ],
        "cons": [
          "No sustituye EDR empresarial",
          "La limpieza debe validarse"
        ],
        "tip": "Tras limpiar, revisa persistencia con Autoruns.",
        "resources": {
          "official": "https://www.malwarebytes.com/",
          "download": "https://www.malwarebytes.com/mwb-download",
          "docs": "https://support.malwarebytes.com/",
          "community": "https://forums.malwarebytes.com/",
          "learn": "https://www.malwarebytes.com/blog"
        }
      },
      {
        "name": "Recuva",
        "learning": "Baja",
        "description": "Recuperación de archivos eliminados en discos, tarjetas y unidades externas en escenarios simples.",
        "pros": [
          "Interfaz simple",
          "Útil para borrados recientes",
          "Rápido para usuarios finales"
        ],
        "cons": [
          "Limitado en daños graves",
          "La recuperación empeora si se escribe en el disco"
        ],
        "tip": "Monta el disco en solo lectura antes de recuperar.",
        "resources": {
          "official": "https://www.ccleaner.com/recuva",
          "download": "https://www.ccleaner.com/recuva/download",
          "docs": "https://support.ccleaner.com/s/topic/0TO3s000000gcEwGAI/recuva",
          "community": "https://community.ccleaner.com/",
          "learn": "https://support.ccleaner.com/s/topic/0TO3s000000gcEwGAI/recuva"
        }
      },
      {
        "name": "TestDisk / PhotoRec",
        "learning": "Alta",
        "description": "Utilidades de recuperación de particiones y archivos para daños de tabla de particiones o borrados severos.",
        "pros": [
          "Muy potentes",
          "Open source",
          "Funcionan donde herramientas simples fallan"
        ],
        "cons": [
          "Interfaz técnica",
          "Riesgo si se escribe sobre disco original"
        ],
        "tip": "Trabaja sobre imagen del disco, no sobre el original, si los datos importan.",
        "resources": {
          "official": "https://www.cgsecurity.org/",
          "download": "https://www.cgsecurity.org/wiki/TestDisk_Download",
          "docs": "https://www.cgsecurity.org/wiki/TestDisk_Step_By_Step",
          "community": "https://forum.cgsecurity.org/",
          "learn": "https://www.cgsecurity.org/wiki/TestDisk_Step_By_Step"
        }
      },
      {
        "name": "DISM / SFC",
        "learning": "Media",
        "description": "Herramientas nativas de Windows para reparar componentes, imagen del sistema y archivos protegidos.",
        "pros": [
          "Incluidas en Windows",
          "Buenas para corrupción del sistema",
          "Aptas para scripting"
        ],
        "cons": [
          "No arreglan problemas de terceros",
          "Requieren orden correcto"
        ],
        "tip": "Ejecuta DISM /RestoreHealth antes de SFC si sospechas corrupción de componentes.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/dism-reference--deployment-image-servicing-and-management",
          "download": "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/dism-reference--deployment-image-servicing-and-management",
          "docs": "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/what-is-dism",
          "community": "https://learn.microsoft.com/en-us/answers/",
          "learn": "https://learn.microsoft.com/en-us/windows-hardware/manufacture/desktop/repair-a-windows-image"
        }
      }
    ]
  };

export default REPARACION;
