const REDES = {
    "category": "Redes",
    "description": "Captura, escaneo, conectividad, rutas, rendimiento, DNS y troubleshooting de red.",
    "tools": [
      {
        "name": "Wireshark",
        "learning": "Alta",
        "description": "Analizador de paquetes para inspeccionar tráfico de red, protocolos, handshakes, retransmisiones y errores.",
        "pros": [
          "Visibilidad profunda por protocolo",
          "Filtros muy potentes",
          "Estándar para análisis avanzado"
        ],
        "cons": [
          "Curva de aprendizaje elevada",
          "Las capturas grandes requieren método"
        ],
        "tip": "Domina filtros como ip.addr, tcp.port, dns y http antes de capturas complejas.",
        "resources": {
          "official": "https://www.wireshark.org/",
          "download": "https://www.wireshark.org/download.html",
          "docs": "https://www.wireshark.org/docs/wsug_html_chunked/",
          "community": "https://ask.wireshark.org/",
          "learn": "https://www.wireshark.org/docs/wsug_html_chunked/"
        }
      },
      {
        "name": "Nmap",
        "learning": "Media",
        "description": "Escáner de red para descubrir hosts, puertos, servicios, versiones, scripts NSE y exposición.",
        "pros": [
          "Muy flexible",
          "Automatizable",
          "Gran ecosistema de scripts NSE"
        ],
        "cons": [
          "Puede generar alertas de seguridad",
          "Debe usarse solo con autorización"
        ],
        "tip": "Combina -sV con scripts NSE específicos para inventario controlado.",
        "resources": {
          "official": "https://nmap.org/",
          "download": "https://nmap.org/download.html",
          "docs": "https://nmap.org/docs.html",
          "community": "https://seclists.org/nmap-dev/",
          "learn": "https://nmap.org/book/"
        }
      },
      {
        "name": "Advanced IP Scanner",
        "learning": "Baja",
        "description": "Escáner visual para descubrir equipos en LAN, IP, MAC, fabricante y accesos remotos comunes.",
        "pros": [
          "Muy fácil para inventario rápido",
          "Interfaz amigable",
          "Útil para soporte de campo"
        ],
        "cons": [
          "Menos potente que Nmap",
          "Limitado para redes segmentadas"
        ],
        "tip": "Útil para detectar dispositivos desconocidos tras cambios de DHCP.",
        "resources": {
          "official": "https://www.advanced-ip-scanner.com/",
          "download": "https://www.advanced-ip-scanner.com/",
          "docs": "https://www.advanced-ip-scanner.com/help/",
          "community": "https://forum.radmin.com/",
          "learn": "https://www.advanced-ip-scanner.com/help/"
        }
      },
      {
        "name": "MobaXterm",
        "learning": "Media",
        "description": "Cliente todo en uno para SSH, RDP, VNC, SFTP, X11, túneles y terminales múltiples.",
        "pros": [
          "Concentra muchas conexiones",
          "SFTP integrado en SSH",
          "Buen flujo para administración mixta"
        ],
        "cons": [
          "La versión gratuita tiene límites",
          "Puede ser excesivo si solo necesitas SSH"
        ],
        "tip": "Organiza sesiones por cliente, entorno o criticidad para reducir errores.",
        "resources": {
          "official": "https://mobaxterm.mobatek.net/",
          "download": "https://mobaxterm.mobatek.net/download.html",
          "docs": "https://mobaxterm.mobatek.net/documentation.html",
          "community": "https://mobaxterm.mobatek.net/forum.html",
          "learn": "https://mobaxterm.mobatek.net/documentation.html"
        }
      },
      {
        "name": "PuTTY",
        "learning": "Baja",
        "description": "Cliente SSH/Telnet clásico para administración remota de sistemas, switches, routers y servidores.",
        "pros": [
          "Ligero y estable",
          "Muy conocido",
          "Ideal para conexiones rápidas"
        ],
        "cons": [
          "Interfaz antigua",
          "Gestión de sesiones básica"
        ],
        "tip": "Usa Pageant para manejar claves SSH sin escribir passphrases continuamente.",
        "resources": {
          "official": "https://www.putty.org/",
          "download": "https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html",
          "docs": "https://the.earth.li/~sgtatham/putty/latest/htmldoc/",
          "community": "https://www.chiark.greenend.org.uk/~sgtatham/putty/feedback.html",
          "learn": "https://the.earth.li/~sgtatham/putty/latest/htmldoc/"
        }
      },
      {
        "name": "iperf3",
        "learning": "Media",
        "description": "Herramienta CLI para medir rendimiento TCP/UDP entre dos puntos de red.",
        "pros": [
          "Medición precisa de throughput",
          "Soporta UDP y pruebas paralelas",
          "Ideal para validar enlaces"
        ],
        "cons": [
          "Requiere servidor y cliente",
          "Los resultados dependen de firewall, CPU y ventana TCP"
        ],
        "tip": "Ejecuta pruebas paralelas con -P para aproximarte a la capacidad real del enlace.",
        "resources": {
          "official": "https://iperf.fr/",
          "download": "https://iperf.fr/iperf-download.php",
          "docs": "https://iperf.fr/iperf-doc.php",
          "community": "https://github.com/esnet/iperf",
          "learn": "https://software.es.net/iperf/invoking.html"
        }
      }
    ]
  };

export default REDES;
