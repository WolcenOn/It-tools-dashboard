const ALMACENAMIENTO = {
    "category": "Almacenamiento",
    "description": "Discos, particiones, NAS, sincronización, clonado y análisis de capacidad.",
    "tools": [
      {
        "name": "TrueNAS SCALE",
        "learning": "Media",
        "description": "Sistema NAS basado en Linux con ZFS, shares, snapshots, replicación, apps y virtualización ligera.",
        "pros": [
          "ZFS robusto",
          "Interfaz web completa",
          "Buen equilibrio NAS/lab"
        ],
        "cons": [
          "ZFS requiere planificación",
          "Cambios de pool son restrictivos"
        ],
        "tip": "Snapshots no sustituyen backups externos.",
        "resources": {
          "official": "https://www.truenas.com/truenas-scale/",
          "download": "https://www.truenas.com/download-truenas-scale/",
          "docs": "https://www.truenas.com/docs/scale/",
          "community": "https://forums.truenas.com/",
          "learn": "https://www.truenas.com/docs/scale/gettingstarted/"
        }
      },
      {
        "name": "GParted",
        "learning": "Media",
        "description": "Editor gráfico de particiones para crear, mover, redimensionar y reparar esquemas de disco.",
        "pros": [
          "Muy útil en rescate",
          "Soporta muchos FS",
          "Live ISO disponible"
        ],
        "cons": [
          "Operaciones destructivas si se usa mal",
          "Mover particiones grandes tarda mucho"
        ],
        "tip": "Haz imagen o backup antes de modificar particiones productivas.",
        "resources": {
          "official": "https://gparted.org/",
          "download": "https://gparted.org/download.php",
          "docs": "https://gparted.org/documentation.php",
          "community": "https://gparted.org/forum.php",
          "learn": "https://gparted.org/display-doc.php?name=help-manual"
        }
      },
      {
        "name": "Clonezilla",
        "learning": "Media",
        "description": "Clonado e imaging de discos o particiones para despliegue, migración y recuperación bare-metal.",
        "pros": [
          "Muy eficiente",
          "Ideal para imágenes maestras",
          "Soporta multicast"
        ],
        "cons": [
          "Interfaz poco amigable",
          "No es backup continuo"
        ],
        "tip": "Verifica restauraciones en hardware similar antes de usar una imagen estándar.",
        "resources": {
          "official": "https://clonezilla.org/",
          "download": "https://clonezilla.org/downloads.php",
          "docs": "https://clonezilla.org/clonezilla-live-doc.php",
          "community": "https://sourceforge.net/p/clonezilla/discussion/",
          "learn": "https://clonezilla.org/show-live-doc-content.php?topic=clonezilla-live/doc/01_Save_disk_image"
        }
      },
      {
        "name": "Rclone",
        "learning": "Media",
        "description": "Sincronización y copia de archivos entre sistemas locales y multitud de proveedores cloud.",
        "pros": [
          "Muchísimos backends",
          "Scriptable",
          "Cifrado remoto opcional"
        ],
        "cons": [
          "Configuraciones complejas delicadas",
          "Sync mal usado puede borrar datos"
        ],
        "tip": "Prueba con --dry-run antes de sincronizaciones destructivas.",
        "resources": {
          "official": "https://rclone.org/",
          "download": "https://rclone.org/downloads/",
          "docs": "https://rclone.org/docs/",
          "community": "https://forum.rclone.org/",
          "learn": "https://rclone.org/docs/"
        }
      },
      {
        "name": "Robocopy",
        "learning": "Media",
        "description": "Herramienta avanzada de copia en Windows para migraciones, espejado, reintentos y preservación de atributos.",
        "pros": [
          "Muy robusto",
          "Incluido en Windows",
          "Excelente para migraciones de shares"
        ],
        "cons": [
          "Parámetros como /MIR son peligrosos",
          "Logs extensos si no se filtran"
        ],
        "tip": "Usa /L para simular y revisa exclusiones antes de /MIR.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy",
          "download": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy",
          "docs": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy",
          "community": "https://learn.microsoft.com/en-us/answers/",
          "learn": "https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/robocopy"
        }
      },
      {
        "name": "TreeSize",
        "learning": "Baja",
        "description": "Análisis visual de uso de disco para localizar carpetas grandes, crecimiento anómalo y datos obsoletos.",
        "pros": [
          "Rápido para limpieza",
          "Interfaz clara",
          "Útil en servidores de archivos"
        ],
        "cons": [
          "La edición gratuita es limitada",
          "No decide qué es seguro borrar"
        ],
        "tip": "Ejecuta como administrador para ver perfiles y carpetas protegidas.",
        "resources": {
          "official": "https://www.jam-software.com/treesize",
          "download": "https://www.jam-software.com/treesize_free",
          "docs": "https://manuals.jam-software.com/treesize/EN/",
          "community": "https://knowledgebase.jam-software.com/",
          "learn": "https://manuals.jam-software.com/treesize/EN/"
        }
      }
    ]
  };

export default ALMACENAMIENTO;
