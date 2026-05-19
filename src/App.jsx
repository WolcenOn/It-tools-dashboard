import React, { useMemo, useState } from "react";
import { Search, Plus, Printer, X, ChevronRight, Server, Shield, Network, Database, Cpu, Cloud, Terminal, HardDrive, Activity, Wrench, Boxes, FileArchive } from "lucide-react";

/**
 * Dashboard de Referencia para Técnicos IT y Administradores de Sistemas
 * Stack recomendado: React + Vite + Tailwind CSS
 *
 * Este archivo puede usarse como src/App.jsx en un proyecto Vite.
 * El objeto IT_TOOLS_DB está centralizado y es fácilmente expandible.
 */

const learningStyles = {
  Baja: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Media: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Alta: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

const categoryIcons = {
  Diagnóstico: Activity,
  Redes: Network,
  Seguridad: Shield,
  Monitorización: Cpu,
  Virtualización: Boxes,
  Contenedores: Cloud,
  Automatización: Terminal,
  Backup: FileArchive,
  Almacenamiento: HardDrive,
  Datos: Database,
  Remoto: Server,
  Reparación: Wrench,
};

const IT_TOOLS_DB = [
  {
    category: "Diagnóstico",
    description: "Utilidades para identificar cuellos de botella, errores de sistema, procesos conflictivos y fallos de hardware o software.",
    tools: [
      {
        name: "Sysinternals Suite",
        learning: "Media",
        description: "Colección avanzada de utilidades de Microsoft para inspeccionar procesos, arranques, handles, registros, DLLs, eventos y actividad del sistema Windows.",
        pros: ["Profundidad técnica sobresaliente", "Herramientas portables", "Ideal para análisis forense ligero y troubleshooting"],
        cons: ["Puede ser intimidante para perfiles junior", "Algunas utilidades requieren interpretar datos de bajo nivel"],
        tip: "Process Explorer, Autoruns y Procmon son el trío esencial para detectar persistencia, bloqueos y actividad anómala."
      },
      {
        name: "HWiNFO",
        learning: "Baja",
        description: "Inventario y monitorización de sensores de hardware en tiempo real: temperaturas, voltajes, SMART, buses, memoria y CPU.",
        pros: ["Lectura de sensores muy completa", "Útil para estrés térmico y diagnóstico preventivo", "Genera reportes detallados"],
        cons: ["La cantidad de métricas puede saturar", "Algunas placas exponen sensores ambiguos"],
        tip: "Activa logging durante pruebas de carga para correlacionar temperatura, throttling y estabilidad."
      },
      {
        name: "CrystalDiskInfo",
        learning: "Baja",
        description: "Herramienta simple para revisar estado SMART, temperatura, horas de uso y alertas de discos HDD, SSD y NVMe.",
        pros: ["Muy rápida para triage", "Interfaz clara", "Soporta alertas visuales del estado del disco"],
        cons: ["No reemplaza pruebas extendidas del fabricante", "SMART no siempre predice fallos repentinos"],
        tip: "Revisa sectores reasignados, errores no corregibles y porcentaje de vida restante en SSD."
      },
      {
        name: "MemTest86",
        learning: "Media",
        description: "Sistema booteable para validar memoria RAM fuera del sistema operativo mediante patrones de prueba intensivos.",
        pros: ["Excelente para descartar fallos intermitentes", "Independiente del SO", "Adecuado para equipos críticos"],
        cons: ["Consume bastante tiempo", "Los errores pueden depender de perfiles XMP/EXPO o temperatura"],
        tip: "Ejecuta varias pasadas y prueba también con perfiles de memoria por defecto si hay errores."
      },
      {
        name: "Windows Reliability Monitor",
        learning: "Baja",
        description: "Vista cronológica integrada de errores de aplicaciones, actualizaciones fallidas, cierres inesperados y estabilidad del sistema.",
        pros: ["Incluido en Windows", "Excelente para encontrar patrones temporales", "Fácil para soporte de primer nivel"],
        cons: ["Menos profundo que Event Viewer", "No siempre muestra causa raíz completa"],
        tip: "Busca caídas repetidas tras una fecha concreta para relacionarlas con drivers o parches."
      },
      {
        name: "Event Viewer",
        learning: "Media",
        description: "Consola nativa de Windows para revisar logs de sistema, seguridad, aplicaciones, servicios y eventos personalizados.",
        pros: ["Fuente oficial de eventos", "Permite filtros por ID, origen y severidad", "Clave para auditoría básica"],
        cons: ["Mucho ruido en entornos reales", "Los mensajes pueden ser crípticos"],
        tip: "Guarda vistas personalizadas por IDs recurrentes para acelerar diagnósticos repetitivos."
      },
      {
        name: "OpenHardwareMonitor",
        learning: "Baja",
        description: "Monitor ligero de sensores de hardware, temperaturas, ventiladores, voltajes y carga de CPU/GPU.",
        pros: ["Open source", "Ligero", "Puede integrarse con otras herramientas"],
        cons: ["Menos actualizado que alternativas modernas", "Compatibilidad desigual con hardware nuevo"],
        tip: "Úsalo cuando necesites una opción simple y portable para lectura rápida de sensores."
      }
    ]
  },
  {
    category: "Redes",
    description: "Herramientas para captura, escaneo, análisis, conectividad, rutas, DNS y troubleshooting de red.",
    tools: [
      {
        name: "Wireshark",
        learning: "Alta",
        description: "Analizador de paquetes líder para inspeccionar tráfico de red a bajo nivel, protocolos, handshakes, retransmisiones y errores.",
        pros: ["Visibilidad profunda por protocolo", "Filtros muy potentes", "Imprescindible para análisis avanzado"],
        cons: ["Curva de aprendizaje elevada", "Requiere criterio para no perderse entre paquetes"],
        tip: "Domina display filters como ip.addr, tcp.port, dns y http antes de capturas complejas."
      },
      {
        name: "Nmap",
        learning: "Media",
        description: "Escáner de red para descubrir hosts, puertos, servicios, versiones, scripts NSE y exposición de superficie.",
        pros: ["Muy flexible", "Automatizable", "Gran ecosistema de scripts"],
        cons: ["Puede generar alertas de seguridad", "Debe usarse con autorización"],
        tip: "Combina -sV con scripts NSE específicos para inventario controlado, no para escaneos indiscriminados."
      },
      {
        name: "Advanced IP Scanner",
        learning: "Baja",
        description: "Escáner visual para descubrir equipos en una LAN, ver IP, MAC, fabricante y accesos remotos comunes.",
        pros: ["Muy fácil para inventario rápido", "Interfaz amigable", "Adecuado para soporte de campo"],
        cons: ["Menos potente que Nmap", "Limitado para redes segmentadas"],
        tip: "Útil para detectar dispositivos desconocidos tras cambios de DHCP o migraciones."
      },
      {
        name: "MobaXterm",
        learning: "Media",
        description: "Cliente todo en uno para SSH, RDP, VNC, SFTP, X11, túneles y terminales múltiples.",
        pros: ["Concentra muchas conexiones", "SFTP integrado en SSH", "Buen flujo para administración mixta"],
        cons: ["La versión gratuita tiene límites", "Puede ser excesivo si solo necesitas SSH"],
        tip: "Organiza sesiones por cliente, entorno o criticidad para reducir errores operativos."
      },
      {
        name: "PuTTY",
        learning: "Baja",
        description: "Cliente SSH/Telnet clásico para administración remota de sistemas, switches, routers y servidores.",
        pros: ["Ligero y estable", "Muy conocido", "Ideal para conexiones rápidas"],
        cons: ["Interfaz antigua", "Gestión de sesiones básica frente a alternativas modernas"],
        tip: "Usa Pageant para manejar claves SSH sin escribir passphrases continuamente."
      },
      {
        name: "iperf3",
        learning: "Media",
        description: "Herramienta de línea de comandos para medir rendimiento TCP/UDP entre dos puntos de red.",
        pros: ["Medición precisa de throughput", "Soporta pruebas bidireccionales y UDP", "Ideal para validar enlaces"],
        cons: ["Requiere servidor y cliente", "Los resultados dependen de CPU, firewall y ventana TCP"],
        tip: "Ejecuta pruebas paralelas con -P para aproximarte mejor a la capacidad real del enlace."
      },
      {
        name: "Netcat",
        learning: "Media",
        description: "Utilidad versátil para leer y escribir conexiones TCP/UDP, probar puertos, banners y flujos simples.",
        pros: ["Extremadamente flexible", "Perfecto para pruebas rápidas", "Disponible en muchas plataformas"],
        cons: ["Puede ser bloqueado por EDR/antivirus", "Uso inseguro si se improvisa en producción"],
        tip: "Úsalo para validar conectividad de aplicación cuando ping no basta."
      }
    ]
  },
  {
    category: "Seguridad",
    description: "Software para hardening, evaluación de exposición, respuesta a incidentes, secretos, vulnerabilidades y protección endpoint.",
    tools: [
      {
        name: "Microsoft Defender for Endpoint",
        learning: "Alta",
        description: "Plataforma EDR/XDR para detección, investigación, respuesta, hunting avanzado y protección de endpoints empresariales.",
        pros: ["Integración fuerte con Windows y Microsoft 365", "Hunting con KQL", "Buena visibilidad centralizada"],
        cons: ["Licenciamiento complejo", "Requiere tuning para reducir falsos positivos"],
        tip: "Crea consultas KQL reutilizables para persistencia, PowerShell sospechoso y ejecución desde rutas temporales."
      },
      {
        name: "Bitwarden",
        learning: "Baja",
        description: "Gestor de contraseñas y secretos para usuarios y equipos, con bóvedas, autocompletado y opciones empresariales.",
        pros: ["Facilita contraseñas únicas", "Buena relación coste/función", "Opciones self-hosted"],
        cons: ["Requiere disciplina operativa", "La recuperación debe planificarse bien"],
        tip: "Activa MFA, políticas de organización y colecciones por rol."
      },
      {
        name: "OpenVAS / Greenbone",
        learning: "Alta",
        description: "Escáner de vulnerabilidades para detectar servicios expuestos, CVEs, configuraciones débiles y riesgos conocidos.",
        pros: ["Open source", "Cobertura amplia", "Útil para auditorías internas"],
        cons: ["Puede requerir mantenimiento", "Resultados necesitan validación manual"],
        tip: "Programa escaneos autenticados para mejorar precisión frente a escaneos externos simples."
      },
      {
        name: "Lynis",
        learning: "Media",
        description: "Auditor de seguridad para Linux, Unix y macOS centrado en hardening, configuración y buenas prácticas.",
        pros: ["Rápido y scriptable", "Muy útil para baseline", "Genera recomendaciones accionables"],
        cons: ["No sustituye auditoría completa", "Algunas recomendaciones dependen del contexto"],
        tip: "Inclúyelo en pipelines o revisiones periódicas de servidores Linux."
      },
      {
        name: "YARA",
        learning: "Alta",
        description: "Motor de reglas para identificar patrones en malware, binarios, memoria o archivos sospechosos.",
        pros: ["Muy potente para detección personalizada", "Usado en threat hunting", "Reglas compartibles"],
        cons: ["Requiere conocimiento de patrones", "Reglas malas generan ruido"],
        tip: "Empieza con reglas simples por strings, imports y condiciones antes de firmas complejas."
      },
      {
        name: "OSSEC / Wazuh",
        learning: "Alta",
        description: "HIDS/SIEM open source para integridad de archivos, logs, alertas, compliance y respuesta básica.",
        pros: ["Muy completo", "Integración con agentes", "Bueno para visibilidad multi-host"],
        cons: ["Necesita arquitectura y mantenimiento", "Afinar reglas lleva tiempo"],
        tip: "Define grupos por tipo de servidor para aplicar reglas y políticas diferenciadas."
      },
      {
        name: "KeePassXC",
        learning: "Baja",
        description: "Gestor de contraseñas local y open source compatible con bases KeePass, ideal para bóvedas offline.",
        pros: ["Control local", "Sin dependencia cloud", "Buen soporte de claves y archivos"],
        cons: ["Sin sincronización empresarial nativa", "La custodia del archivo es crítica"],
        tip: "Combina contraseña maestra fuerte con key file almacenado por separado."
      }
    ]
  },
  {
    category: "Monitorización",
    description: "Plataformas para métricas, logs, alertas, dashboards, disponibilidad y observabilidad de infraestructura.",
    tools: [
      {
        name: "Grafana",
        learning: "Media",
        description: "Plataforma de dashboards y visualización para métricas, logs y trazas desde múltiples fuentes de datos.",
        pros: ["Dashboards muy flexibles", "Gran ecosistema de plugins", "Excelente para NOC y SRE"],
        cons: ["No recolecta todo por sí sola", "El diseño de dashboards útiles requiere criterio"],
        tip: "Agrupa paneles por servicio y define variables para filtrar entorno, host o región."
      },
      {
        name: "Prometheus",
        learning: "Alta",
        description: "Sistema de métricas time-series con scraping, PromQL, alerting y enfoque cloud-native.",
        pros: ["Modelo robusto para métricas", "PromQL muy expresivo", "Estándar en Kubernetes"],
        cons: ["Gestión de cardinalidad compleja", "No es ideal para logs"],
        tip: "Controla labels de alta cardinalidad antes de que degraden almacenamiento y consultas."
      },
      {
        name: "Zabbix",
        learning: "Alta",
        description: "Suite completa para monitorizar servidores, redes, servicios, SNMP, agentes, plantillas y alertas.",
        pros: ["Muy completo on-prem", "Buenas plantillas", "Escalable con proxies"],
        cons: ["Interfaz y configuración densas", "Requiere diseño inicial cuidadoso"],
        tip: "Usa plantillas y discovery rules para evitar configuraciones manuales host por host."
      },
      {
        name: "Nagios Core / XI",
        learning: "Media",
        description: "Sistema clásico de monitorización basado en checks, plugins, estados y notificaciones.",
        pros: ["Muy probado", "Gran cantidad de plugins", "Modelo simple de checks"],
        cons: ["Configuración tradicional pesada", "Menos moderno para observabilidad avanzada"],
        tip: "Sigue siendo útil para checks discretos de disponibilidad y servicios críticos."
      },
      {
        name: "Datadog",
        learning: "Media",
        description: "Plataforma SaaS de observabilidad para infraestructura, APM, logs, seguridad y experiencia digital.",
        pros: ["Time-to-value rápido", "Integraciones abundantes", "Excelente correlación de señales"],
        cons: ["Coste puede crecer mucho", "Dependencia SaaS"],
        tip: "Define límites de ingesta y retención desde el inicio para controlar costes."
      },
      {
        name: "Uptime Kuma",
        learning: "Baja",
        description: "Monitor de disponibilidad self-hosted para HTTP, TCP, ping, DNS y notificaciones.",
        pros: ["Muy fácil de desplegar", "Interfaz moderna", "Ideal para pequeños equipos"],
        cons: ["No sustituye observabilidad completa", "Escalabilidad limitada frente a suites mayores"],
        tip: "Perfecto para una página de estado interna de servicios esenciales."
      },
      {
        name: "ELK / Elastic Stack",
        learning: "Alta",
        description: "Stack para ingesta, búsqueda, análisis y visualización de logs con Elasticsearch, Logstash/Beats y Kibana.",
        pros: ["Búsqueda potente", "Útil para logs masivos", "Kibana facilita análisis visual"],
        cons: ["Operación exigente", "Costes de almacenamiento y tuning relevantes"],
        tip: "Diseña políticas ILM para rotación, hot/warm/cold y retención antes de producir grandes volúmenes."
      }
    ]
  },
  {
    category: "Virtualización",
    description: "Hipervisores, plataformas de laboratorio, consolidación de servidores y gestión de máquinas virtuales.",
    tools: [
      {
        name: "Proxmox VE",
        learning: "Media",
        description: "Plataforma open source de virtualización basada en KVM y LXC con clustering, backups, HA y gestión web.",
        pros: ["Excelente para homelab y pymes", "Soporta VMs y contenedores LXC", "Buena integración con ZFS y Ceph"],
        cons: ["Algunas funciones empresariales requieren experiencia", "La HA necesita diseño de almacenamiento adecuado"],
        tip: "Combínalo con ZFS snapshots y Proxmox Backup Server para protección eficiente."
      },
      {
        name: "VMware vSphere / ESXi",
        learning: "Alta",
        description: "Plataforma empresarial de virtualización para centros de datos, clusters, HA, DRS y gestión centralizada.",
        pros: ["Madurez empresarial", "Ecosistema amplio", "Rendimiento y funciones avanzadas"],
        cons: ["Coste/licencia elevado", "Administración compleja en entornos grandes"],
        tip: "Documenta redes virtuales, datastores y políticas antes de cambios en clusters productivos."
      },
      {
        name: "Hyper-V",
        learning: "Media",
        description: "Hipervisor de Microsoft integrado en Windows Server y Windows Pro/Enterprise para virtualización local y empresarial.",
        pros: ["Integración con ecosistema Windows", "Bueno para laboratorios y pymes", "PowerShell robusto"],
        cons: ["Menor ecosistema que VMware en algunos escenarios", "La gestión avanzada requiere System Center o tooling adicional"],
        tip: "Usa checkpoints con cuidado: no son sustituto de backup en producción."
      },
      {
        name: "VirtualBox",
        learning: "Baja",
        description: "Virtualizador de escritorio multiplataforma para laboratorios, pruebas de software y entornos aislados.",
        pros: ["Gratis y accesible", "Fácil para pruebas rápidas", "Snapshots simples"],
        cons: ["No ideal para producción", "Rendimiento inferior a hipervisores bare-metal"],
        tip: "Usa redes NAT, bridge o host-only según necesites aislamiento o acceso LAN."
      },
      {
        name: "KVM / QEMU",
        learning: "Alta",
        description: "Base de virtualización Linux muy potente usada por múltiples plataformas y clouds privados.",
        pros: ["Rendimiento sólido", "Muy flexible", "Estándar en Linux"],
        cons: ["Administración manual compleja", "Requiere dominio de redes y almacenamiento Linux"],
        tip: "Gestiona KVM con libvirt/virt-manager o automatización para evitar configuraciones frágiles."
      },
      {
        name: "Vagrant",
        learning: "Media",
        description: "Herramienta para crear entornos reproducibles de desarrollo/laboratorio sobre VirtualBox, VMware, Hyper-V y otros providers.",
        pros: ["Entornos declarativos", "Ideal para labs reproducibles", "Integra provisioning"],
        cons: ["Menos usado en stacks cloud-native modernos", "Puede ser lento con VMs pesadas"],
        tip: "Versiona el Vagrantfile para compartir laboratorios idénticos entre técnicos."
      }
    ]
  },
  {
    category: "Contenedores",
    description: "Herramientas para empaquetar, ejecutar, orquestar y administrar aplicaciones en contenedores.",
    tools: [
      {
        name: "Docker",
        learning: "Media",
        description: "Plataforma estándar para construir y ejecutar contenedores con imágenes reproducibles y redes aisladas.",
        pros: ["Gran ecosistema", "Facilita despliegues reproducibles", "Excelente para desarrollo y servicios ligeros"],
        cons: ["La seguridad depende de imágenes y permisos", "Persistencia y redes requieren diseño"],
        tip: "Evita ejecutar contenedores como root cuando sea posible y fija versiones de imágenes."
      },
      {
        name: "Docker Compose",
        learning: "Media",
        description: "Definición YAML para levantar stacks multi-contenedor con redes, volúmenes y variables.",
        pros: ["Simple para entornos pequeños", "Muy legible", "Ideal para labs y servicios internos"],
        cons: ["No reemplaza orquestación avanzada", "Gestión multi-host limitada"],
        tip: "Separa variables sensibles en .env y evita subir secretos al repositorio."
      },
      {
        name: "Kubernetes",
        learning: "Alta",
        description: "Orquestador de contenedores para despliegues escalables, auto-recuperación, servicios, configuración y workloads distribuidos.",
        pros: ["Estándar cloud-native", "Escalabilidad y resiliencia", "Ecosistema enorme"],
        cons: ["Complejidad alta", "Operarlo bien exige observabilidad, seguridad y automatización"],
        tip: "Aprende namespaces, deployments, services, ingress, RBAC y storage classes antes de producción."
      },
      {
        name: "Podman",
        learning: "Media",
        description: "Motor de contenedores daemonless compatible con flujos Docker, con énfasis en rootless containers.",
        pros: ["Rootless por diseño", "Compatible con comandos similares a Docker", "Bueno en entornos Linux seguros"],
        cons: ["Menor adopción en algunos equipos", "Diferencias sutiles con Docker pueden romper scripts"],
        tip: "Útil cuando necesitas contenedores sin daemon privilegiado permanente."
      },
      {
        name: "Portainer",
        learning: "Baja",
        description: "Interfaz web para administrar Docker, Swarm, Kubernetes y entornos edge de forma visual.",
        pros: ["Reduce fricción operativa", "Bueno para equipos pequeños", "Gestión visual de stacks"],
        cons: ["No elimina necesidad de entender el runtime", "Puede ocultar detalles importantes"],
        tip: "Úsalo como capa de operación, pero conserva IaC o compose files versionados."
      },
      {
        name: "Rancher",
        learning: "Alta",
        description: "Plataforma para gestionar múltiples clusters Kubernetes, usuarios, políticas, catálogos y operaciones centralizadas.",
        pros: ["Muy útil multi-cluster", "Gestión RBAC central", "Facilita operaciones Kubernetes"],
        cons: ["Otra capa que mantener", "Requiere arquitectura fiable"],
        tip: "Separa cluster de gestión y clusters gestionados para reducir riesgos operativos."
      }
    ]
  },
  {
    category: "Automatización",
    description: "Provisioning, configuración, scripting, infraestructura como código y reducción de tareas manuales repetitivas.",
    tools: [
      {
        name: "Ansible",
        learning: "Media",
        description: "Automatización agentless para configuración, despliegue, orquestación y tareas administrativas mediante playbooks YAML.",
        pros: ["Sin agentes", "Legible", "Muy bueno para configuración repetible"],
        cons: ["YAML puede crecer desordenado", "La idempotencia requiere cuidado"],
        tip: "Organiza roles, inventarios y variables por entorno desde el principio."
      },
      {
        name: "Terraform",
        learning: "Alta",
        description: "Infraestructura como código para crear y gestionar recursos cloud, redes, DNS, Kubernetes y servicios externos.",
        pros: ["Declarativo y reproducible", "Amplio soporte de providers", "Plan/apply reduce cambios ciegos"],
        cons: ["Gestión de estado crítica", "Refactors pueden ser delicados"],
        tip: "Protege el state remoto con bloqueo y control de acceso estricto."
      },
      {
        name: "PowerShell",
        learning: "Media",
        description: "Shell y lenguaje de automatización orientado a objetos, esencial para Windows, Microsoft 365, Azure y administración híbrida.",
        pros: ["Muy potente en Windows", "Pipeline de objetos", "Gran soporte administrativo"],
        cons: ["Scripts inseguros pueden causar impacto masivo", "Requiere política de ejecución y revisión"],
        tip: "Usa -WhatIf, -Confirm y transcript logs en cambios masivos."
      },
      {
        name: "Bash",
        learning: "Media",
        description: "Shell estándar en Linux/Unix para automatizar tareas, administrar servicios, procesar texto y encadenar herramientas CLI.",
        pros: ["Disponible casi siempre", "Excelente para glue scripting", "Gran productividad CLI"],
        cons: ["Manejo de errores delicado", "Scripts largos pierden mantenibilidad"],
        tip: "Activa set -euo pipefail y valida variables antes de scripts administrativos."
      },
      {
        name: "Jenkins",
        learning: "Alta",
        description: "Servidor de automatización CI/CD extensible mediante plugins, pipelines y agentes.",
        pros: ["Muy flexible", "Ecosistema enorme", "Adecuado para pipelines personalizados"],
        cons: ["Mantenimiento y plugins pueden ser complejos", "Seguridad requiere atención"],
        tip: "Usa Jenkinsfile versionado y revisa permisos de credenciales periódicamente."
      },
      {
        name: "GitHub Actions",
        learning: "Media",
        description: "Automatización CI/CD integrada en GitHub para tests, builds, despliegues, seguridad y tareas programadas.",
        pros: ["Integración directa con repos", "Marketplace amplio", "Fácil para pipelines modernos"],
        cons: ["Costes/minutos en proyectos grandes", "Riesgo con secretos y acciones de terceros"],
        tip: "Fija versiones de actions y limita permisos con permissions: least privilege."
      },
      {
        name: "SaltStack",
        learning: "Alta",
        description: "Plataforma de automatización y configuración remota basada en estados, eventos y ejecución masiva.",
        pros: ["Muy potente a escala", "Arquitectura orientada a eventos", "Rápido para ejecución remota"],
        cons: ["Curva alta", "Menos popular que Ansible en muchos equipos"],
        tip: "Aprovecha grains y pillars para segmentar configuración por rol o entorno."
      }
    ]
  },
  {
    category: "Backup",
    description: "Soluciones de copia, recuperación, snapshots, replicación, continuidad de negocio y protección contra pérdida de datos.",
    tools: [
      {
        name: "Veeam Backup & Replication",
        learning: "Media",
        description: "Plataforma empresarial para backup, replicación y recuperación de VMs, servidores, NAS y workloads cloud.",
        pros: ["Muy fuerte en virtualización", "Restauraciones granulares", "Buenas opciones de inmutabilidad"],
        cons: ["Licenciamiento y repositorios requieren planificación", "Puede consumir bastante almacenamiento"],
        tip: "Aplica regla 3-2-1-1-0: copias múltiples, una offline/inmutable y verificaciones sin errores."
      },
      {
        name: "Proxmox Backup Server",
        learning: "Media",
        description: "Backup deduplicado e incremental para Proxmox VE con verificación, cifrado y retención eficiente.",
        pros: ["Deduplicación eficiente", "Integración excelente con Proxmox", "Verificación de backups"],
        cons: ["Más específico para ecosistema Proxmox", "Diseño de almacenamiento sigue siendo crítico"],
        tip: "Programa verify jobs para detectar corrupción antes de necesitar restaurar."
      },
      {
        name: "BorgBackup",
        learning: "Media",
        description: "Backup deduplicado, comprimido y cifrado desde línea de comandos, muy usado en Linux.",
        pros: ["Eficiente y seguro", "Ideal para servidores", "Retención flexible"],
        cons: ["CLI no apta para todos", "Restauración debe probarse manualmente"],
        tip: "Usa borgmatic para simplificar configuración, hooks y retención."
      },
      {
        name: "Restic",
        learning: "Media",
        description: "Backup moderno, cifrado y deduplicado compatible con múltiples backends como S3, SFTP, local y cloud.",
        pros: ["Muy portable", "Cifrado por defecto", "Backends variados"],
        cons: ["No tiene GUI oficial completa", "La gestión de repositorios exige disciplina"],
        tip: "Automatiza snapshots y forget/prune con logs revisables."
      },
      {
        name: "Duplicati",
        learning: "Baja",
        description: "Backup con interfaz web, cifrado y soporte para destinos cloud y locales.",
        pros: ["Fácil de configurar", "Muchos destinos", "Adecuado para estaciones y pequeños servidores"],
        cons: ["Historial de incidencias con bases locales en algunos casos", "No ideal para entornos críticos sin pruebas"],
        tip: "Haz pruebas de restauración periódicas, no solo pruebas de ejecución de backup."
      },
      {
        name: "Acronis Cyber Protect",
        learning: "Media",
        description: "Suite de backup y protección endpoint con funciones de ciberseguridad, antimalware y gestión centralizada.",
        pros: ["Interfaz integrada", "Backup + seguridad", "Orientado a MSP y empresa"],
        cons: ["Puede ser pesado", "Coste superior a opciones simples"],
        tip: "Evalúa si necesitas la parte cyber o solo backup para evitar sobrelicenciamiento."
      }
    ]
  },
  {
    category: "Almacenamiento",
    description: "Gestión de discos, particiones, sistemas de archivos, NAS/SAN, sincronización y recuperación.",
    tools: [
      {
        name: "TrueNAS SCALE",
        learning: "Media",
        description: "Sistema NAS basado en Linux con ZFS, shares, snapshots, replicación, apps y virtualización ligera.",
        pros: ["ZFS robusto", "Interfaz web completa", "Buen equilibrio NAS/lab"],
        cons: ["ZFS requiere RAM y planificación", "Cambios de pool pueden ser restrictivos"],
        tip: "No uses RAIDZ como sustituto de backup; snapshots no protegen contra todos los escenarios."
      },
      {
        name: "GParted",
        learning: "Media",
        description: "Editor de particiones gráfico para crear, mover, redimensionar y reparar esquemas de disco.",
        pros: ["Muy útil en rescate", "Soporta muchos FS", "Live ISO disponible"],
        cons: ["Operaciones destructivas si se usa mal", "Mover particiones grandes puede tardar mucho"],
        tip: "Haz imagen o backup antes de modificar particiones productivas."
      },
      {
        name: "Clonezilla",
        learning: "Media",
        description: "Clonado e imaging de discos o particiones para despliegue, migración y recuperación bare-metal.",
        pros: ["Muy eficiente", "Ideal para imágenes maestras", "Soporta multicast"],
        cons: ["Interfaz poco amigable", "No es backup continuo"],
        tip: "Verifica restauraciones en hardware similar antes de usar una imagen como estándar."
      },
      {
        name: "Rclone",
        learning: "Media",
        description: "Sincronización y copia de archivos entre sistemas locales y multitud de proveedores cloud.",
        pros: ["Soporta muchísimos backends", "Scriptable", "Cifrado remoto opcional"],
        cons: ["Configuraciones complejas pueden ser delicadas", "Riesgo de borrados con sync mal usado"],
        tip: "Prueba con --dry-run antes de sincronizaciones destructivas."
      },
      {
        name: "Robocopy",
        learning: "Media",
        description: "Herramienta avanzada de copia en Windows para migraciones, espejado, reintentos y preservación de atributos.",
        pros: ["Muy robusto", "Incluido en Windows", "Excelente para migraciones de shares"],
        cons: ["Parámetros peligrosos como /MIR", "Logs extensos si no se filtran"],
        tip: "Usa /L para simular y revisa exclusiones antes de ejecutar /MIR."
      },
      {
        name: "TreeSize Free / Professional",
        learning: "Baja",
        description: "Análisis visual de uso de disco para localizar carpetas grandes, crecimiento anómalo y datos obsoletos.",
        pros: ["Muy rápido para limpieza", "Interfaz clara", "Útil en servidores de archivos"],
        cons: ["La edición gratuita es limitada", "No decide qué es seguro borrar"],
        tip: "Ejecuta como administrador para ver perfiles y carpetas protegidas."
      }
    ]
  },
  {
    category: "Datos",
    description: "Administración de bases de datos, consultas, migraciones, clientes SQL/NoSQL y exploración de datos.",
    tools: [
      {
        name: "DBeaver",
        learning: "Media",
        description: "Cliente universal para bases de datos SQL y NoSQL con explorador, editor, diagramas y exportaciones.",
        pros: ["Soporta múltiples motores", "Interfaz productiva", "Bueno para equipos mixtos"],
        cons: ["Puede consumir recursos", "Drivers y permisos deben configurarse bien"],
        tip: "Configura perfiles por entorno para evitar ejecutar consultas en producción por error."
      },
      {
        name: "pgAdmin",
        learning: "Media",
        description: "Herramienta oficial de administración gráfica para PostgreSQL.",
        pros: ["Especializada en PostgreSQL", "Gestión de objetos y consultas", "Buena para administración cotidiana"],
        cons: ["Menos universal que DBeaver", "Puede sentirse pesada"],
        tip: "Usa explain/analyze para investigar consultas lentas con criterio."
      },
      {
        name: "MySQL Workbench",
        learning: "Media",
        description: "Cliente oficial para modelado, administración y consultas en MySQL y MariaDB compatibles.",
        pros: ["Modelado visual", "Administración integrada", "Adecuado para entornos MySQL"],
        cons: ["Rendimiento irregular en proyectos grandes", "No es ideal para múltiples motores"],
        tip: "Valida planes de ejecución antes de añadir índices en caliente."
      },
      {
        name: "SQL Server Management Studio",
        learning: "Media",
        description: "Consola principal para administrar Microsoft SQL Server, jobs, backups, seguridad, consultas y planes.",
        pros: ["Muy completo para SQL Server", "Integración con Agent y Profiler/Extended Events", "Estándar en entornos Microsoft"],
        cons: ["Solo Windows tradicionalmente", "La profundidad puede abrumar"],
        tip: "Aprende Extended Events para diagnosticar rendimiento sin depender de Profiler clásico."
      },
      {
        name: "RedisInsight",
        learning: "Baja",
        description: "Interfaz visual para explorar Redis, claves, TTL, streams, memoria y rendimiento.",
        pros: ["Visualización clara", "Útil para debugging", "Ayuda a entender estructuras Redis"],
        cons: ["Debe protegerse el acceso", "No sustituye buenas métricas de producción"],
        tip: "Busca claves sin TTL en caches para detectar fugas de memoria lógicas."
      },
      {
        name: "MongoDB Compass",
        learning: "Baja",
        description: "Cliente gráfico oficial para explorar colecciones, índices, documentos, agregaciones y rendimiento básico de MongoDB.",
        pros: ["Interfaz intuitiva", "Bueno para inspección documental", "Ayuda con agregaciones"],
        cons: ["Operaciones masivas deben controlarse", "No reemplaza monitoreo de cluster"],
        tip: "Revisa índices y cardinalidad de consultas antes de culpar al hardware."
      }
    ]
  },
  {
    category: "Remoto",
    description: "Acceso remoto, asistencia técnica, administración de endpoints y conexión segura a sistemas distribuidos.",
    tools: [
      {
        name: "AnyDesk",
        learning: "Baja",
        description: "Acceso remoto multiplataforma para soporte rápido, asistencia desatendida y transferencia básica de archivos.",
        pros: ["Muy fácil de usar", "Rendimiento fluido", "Adecuado para soporte externo"],
        cons: ["Riesgo si no se controla acceso desatendido", "Debe gestionarse MFA y listas permitidas"],
        tip: "Configura permisos mínimos y registra sesiones en entornos profesionales."
      },
      {
        name: "TeamViewer",
        learning: "Baja",
        description: "Plataforma consolidada de soporte remoto, acceso desatendido, reuniones y administración de dispositivos.",
        pros: ["Muy conocido", "Funciona bien tras NAT", "Gestión centralizada"],
        cons: ["Coste notable", "Objetivo frecuente de abuso si se configura mal"],
        tip: "Bloquea acceso por cuenta, activa MFA y revisa dispositivos autorizados."
      },
      {
        name: "RustDesk",
        learning: "Media",
        description: "Alternativa open source de escritorio remoto con opción de servidores propios de relay y rendezvous.",
        pros: ["Puede autoalojarse", "Control de infraestructura", "Buena alternativa económica"],
        cons: ["Requiere operar servidor para máximo control", "Menor ecosistema empresarial"],
        tip: "Despliega servidor propio si necesitas soberanía y control de tráfico."
      },
      {
        name: "Apache Guacamole",
        learning: "Alta",
        description: "Gateway remoto clientless vía navegador para RDP, SSH y VNC con autenticación centralizada.",
        pros: ["Sin cliente local", "Centraliza accesos", "Integrable con LDAP/SSO"],
        cons: ["Exponerlo mal es crítico", "Requiere hardening y reverse proxy"],
        tip: "Colócalo detrás de VPN/SSO y registra sesiones para auditoría."
      },
      {
        name: "Royal TS / Royal TSX",
        learning: "Media",
        description: "Gestor profesional de conexiones RDP, SSH, VNC, web y credenciales para administradores.",
        pros: ["Organización excelente", "Soporta credenciales compartidas", "Multi-protocolo"],
        cons: ["Producto comercial", "Requiere buena gobernanza de credenciales"],
        tip: "Usa documentos compartidos con permisos para equipos de soporte."
      },
      {
        name: "Windows Admin Center",
        learning: "Media",
        description: "Consola web de Microsoft para administrar Windows Server, Hyper-V, clusters, eventos, servicios y roles.",
        pros: ["Administración moderna vía navegador", "Muy útil en entornos Windows", "Reduce dependencia de MMCs"],
        cons: ["No cubre todo", "Extensiones y permisos requieren ajuste"],
        tip: "Instálalo como gateway controlado para administrar servidores sin exponer RDP innecesariamente."
      }
    ]
  },
  {
    category: "Reparación",
    description: "Rescate, limpieza, recuperación de sistemas, eliminación de malware, reparación de arranque y soporte de campo.",
    tools: [
      {
        name: "Hiren's BootCD PE",
        learning: "Media",
        description: "Entorno Windows PE con utilidades de diagnóstico, particiones, recuperación, contraseñas, hardware y reparación.",
        pros: ["Muy completo para soporte presencial", "Arranque independiente", "Incluye muchas utilidades útiles"],
        cons: ["Debe descargarse de fuentes legítimas", "No todas las herramientas aplican a entornos empresariales"],
        tip: "Mantén un USB actualizado y documenta qué herramientas están permitidas por política interna."
      },
      {
        name: "Rescuezilla",
        learning: "Baja",
        description: "Herramienta gráfica de backup, restauración y clonado compatible con imágenes Clonezilla.",
        pros: ["Más amigable que Clonezilla", "Ideal para técnicos de campo", "Soporta exploración de imágenes"],
        cons: ["Menos flexible que CLI avanzada", "No es solución de backup continua"],
        tip: "Úsalo para capturar una imagen antes de reparaciones invasivas."
      },
      {
        name: "Malwarebytes",
        learning: "Baja",
        description: "Antimalware orientado a detección y limpieza de amenazas comunes, PUPs y adware.",
        pros: ["Fácil de usar", "Bueno para limpieza bajo demanda", "Detecta adware frecuente"],
        cons: ["No sustituye EDR empresarial", "La limpieza debe validarse después"],
        tip: "Tras limpiar, revisa persistencia con Autoruns y tareas programadas."
      },
      {
        name: "Recuva",
        learning: "Baja",
        description: "Recuperación de archivos eliminados en discos, tarjetas y unidades externas en escenarios simples.",
        pros: ["Interfaz simple", "Útil para borrados recientes", "Rápido para usuarios finales"],
        cons: ["Limitado en daños graves", "La recuperación empeora si se sigue escribiendo en el disco"],
        tip: "Apaga el equipo o monta el disco en solo lectura antes de intentar recuperar datos."
      },
      {
        name: "TestDisk / PhotoRec",
        learning: "Alta",
        description: "Utilidades de recuperación de particiones y archivos, útiles en daños de tabla de particiones o borrados severos.",
        pros: ["Muy potentes", "Open source", "Funcionan donde herramientas simples fallan"],
        cons: ["Interfaz técnica", "Riesgo si se escribe sobre disco original"],
        tip: "Trabaja siempre sobre imagen del disco, no sobre el original, cuando los datos importan."
      },
      {
        name: "DISM / SFC",
        learning: "Media",
        description: "Herramientas nativas de Windows para reparar componentes, imagen del sistema y archivos protegidos.",
        pros: ["Incluidas en Windows", "Buenas para corrupción del sistema", "Aptas para scripting"],
        cons: ["No arreglan problemas de terceros", "Requieren entender el orden correcto"],
        tip: "Ejecuta DISM /RestoreHealth antes de SFC cuando sospeches corrupción de componentes."
      }
    ]
  }
];

function flattenTools(db) {
  return db.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      category: category.category,
      categoryDescription: category.description,
    }))
  );
}

function Header({ totalTools, onPrint }) {
  return (
    <header className="relative overflow-hidden border-b border-cyan-400/10 bg-slate-950/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200">
              <Terminal size={14} /> IT Ops Knowledge Base
            </div>
            <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white sm:text-5xl">
              Dashboard de Referencia para Técnicos IT y Sysadmins
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
              Base navegable de herramientas para soporte, diagnóstico, redes, seguridad, automatización, backups, virtualización y administración de sistemas.
            </p>
          </div>
          <button
            onClick={onPrint}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-100 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-400/20 print:hidden"
          >
            <Printer size={18} /> Exportar a PDF / Imprimir
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Categorías" value={IT_TOOLS_DB.length} />
          <Stat label="Herramientas" value={totalTools} />
          <Stat label="Vista" value="Dark" />
          <Stat label="Datos" value="Local" />
        </div>
      </div>
    </header>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur">
      <div className="text-2xl font-black text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">{label}</div>
    </div>
  );
}

function Sidebar({ categories, selectedCategory, setSelectedCategory, counts }) {
  return (
    <aside className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur print:hidden">
      <h2 className="mb-3 px-2 text-sm font-bold uppercase tracking-widest text-slate-300">Categorías</h2>
      <div className="space-y-2">
        <button
          onClick={() => setSelectedCategory("Todas")}
          className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${selectedCategory === "Todas" ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
        >
          <span className="font-semibold">Todas</span>
          <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs">{Object.values(counts).reduce((a, b) => a + b, 0)}</span>
        </button>
        {categories.map((category) => {
          const Icon = categoryIcons[category] || ChevronRight;
          const active = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition ${active ? "bg-cyan-400 text-slate-950" : "text-slate-300 hover:bg-white/5"}`}
            >
              <span className="flex items-center gap-2 font-semibold"><Icon size={16} /> {category}</span>
              <span className="rounded-full bg-black/20 px-2 py-0.5 text-xs">{counts[category]}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}

function SearchBar({ query, setQuery, selectedLevel, setSelectedLevel }) {
  return (
    <section className="grid gap-3 rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 backdrop-blur print:hidden md:grid-cols-[1fr_220px]">
      <label className="relative block">
        <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={19} />
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por nombre, categoría, descripción, pros, contras o dato útil..."
          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/80 pl-12 pr-4 text-sm text-slate-100 outline-none ring-cyan-400/40 transition placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-4"
        />
      </label>
      <select
        value={selectedLevel}
        onChange={(event) => setSelectedLevel(event.target.value)}
        className="h-12 rounded-2xl border border-white/10 bg-slate-950/80 px-4 text-sm text-slate-100 outline-none ring-cyan-400/40 transition focus:border-cyan-400/50 focus:ring-4"
      >
        <option value="Todas">Todas las curvas</option>
        <option value="Baja">Curva baja</option>
        <option value="Media">Curva media</option>
        <option value="Alta">Curva alta</option>
      </select>
    </section>
  );
}

function ToolCard({ tool, onOpen }) {
  const Icon = categoryIcons[tool.category] || ChevronRight;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900 print:break-inside-avoid">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20">
            <Icon size={14} /> {tool.category}
          </div>
          <h3 className="text-xl font-black text-white">{tool.name}</h3>
        </div>
        <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-bold ${learningStyles[tool.learning]}`}>
          {tool.learning}
        </span>
      </div>

      <p className="line-clamp-4 text-sm leading-6 text-slate-300">{tool.description}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <MiniList title="Pros" items={tool.pros.slice(0, 2)} positive />
        <MiniList title="Contras" items={tool.cons.slice(0, 2)} />
      </div>

      <div className="mt-5 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-3 text-sm text-cyan-100">
        <span className="font-bold">Dato útil:</span> {tool.tip}
      </div>

      <button
        onClick={() => onOpen(tool)}
        className="mt-auto flex items-center justify-between pt-5 text-sm font-bold text-cyan-300 transition group-hover:text-cyan-200 print:hidden"
      >
        Ver detalle técnico <ChevronRight size={18} />
      </button>
    </article>
  );
}

function MiniList({ title, items, positive = false }) {
  return (
    <div>
      <h4 className={`mb-2 text-xs font-black uppercase tracking-widest ${positive ? "text-emerald-300" : "text-rose-300"}`}>{title}</h4>
      <ul className="space-y-1.5 text-xs leading-5 text-slate-400">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className={positive ? "text-emerald-300" : "text-rose-300"}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DetailModal({ tool, onClose }) {
  if (!tool) return null;
  const Icon = categoryIcons[tool.category] || ChevronRight;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4 backdrop-blur-sm print:hidden" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-cyan-400/20 bg-slate-950 shadow-2xl shadow-cyan-950/30">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-950/95 p-5 backdrop-blur">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/20">
              <Icon size={14} /> {tool.category}
            </div>
            <h2 className="text-2xl font-black text-white">{tool.name}</h2>
          </div>
          <button onClick={onClose} className="rounded-2xl border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white" aria-label="Cerrar modal">
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <p className="text-base leading-7 text-slate-300">{tool.description}</p>
          <span className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${learningStyles[tool.learning]}`}>
            Curva de aprendizaje: {tool.learning}
          </span>

          <div className="grid gap-5 md:grid-cols-2">
            <DetailList title="Pros técnicos" items={tool.pros} positive />
            <DetailList title="Contras / Riesgos" items={tool.cons} />
          </div>

          <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
            <h3 className="mb-2 text-sm font-black uppercase tracking-widest text-cyan-200">Dato útil operativo</h3>
            <p className="leading-7 text-cyan-50">{tool.tip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailList({ title, items, positive = false }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
      <h3 className={`mb-4 text-sm font-black uppercase tracking-widest ${positive ? "text-emerald-300" : "text-rose-300"}`}>{title}</h3>
      <ul className="space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className={`mt-2 h-2 w-2 shrink-0 rounded-full ${positive ? "bg-emerald-300" : "bg-rose-300"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AddToolForm({ categories, onAddTool }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    category: categories[0] || "Diagnóstico",
    learning: "Media",
    description: "",
    pros: "",
    cons: "",
    tip: "",
  });

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!form.name.trim() || !form.description.trim()) return;

    onAddTool({
      name: form.name.trim(),
      category: form.category,
      learning: form.learning,
      description: form.description.trim(),
      pros: form.pros.split(";").map((item) => item.trim()).filter(Boolean),
      cons: form.cons.split(";").map((item) => item.trim()).filter(Boolean),
      tip: form.tip.trim() || "Documenta versión, propietario, caso de uso y procedimiento de rollback antes de producción.",
    });

    setForm({ name: "", category: categories[0] || "Diagnóstico", learning: "Media", description: "", pros: "", cons: "", tip: "" });
    setOpen(false);
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 shadow-2xl shadow-black/20 print:hidden">
      <button
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-left font-bold text-emerald-100 transition hover:bg-emerald-400/20"
      >
        <span className="flex items-center gap-2"><Plus size={18} /> Añadir nueva herramienta local</span>
        <ChevronRight className={`transition ${open ? "rotate-90" : ""}`} size={18} />
      </button>

      {open && (
        <form onSubmit={handleSubmit} className="mt-4 grid gap-3">
          <input value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Nombre de la herramienta" className="input" />
          <div className="grid gap-3 sm:grid-cols-2">
            <select value={form.category} onChange={(e) => updateField("category", e.target.value)} className="input">
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
            <select value={form.learning} onChange={(e) => updateField("learning", e.target.value)} className="input">
              <option value="Baja">Baja</option>
              <option value="Media">Media</option>
              <option value="Alta">Alta</option>
            </select>
          </div>
          <textarea value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Descripción técnica" className="input min-h-24" />
          <input value={form.pros} onChange={(e) => updateField("pros", e.target.value)} placeholder="Pros separados por punto y coma. Ej: Portable; Rápida; Scriptable" className="input" />
          <input value={form.cons} onChange={(e) => updateField("cons", e.target.value)} placeholder="Contras separados por punto y coma. Ej: Curva alta; Requiere permisos" className="input" />
          <textarea value={form.tip} onChange={(e) => updateField("tip", e.target.value)} placeholder="Dato útil operativo" className="input min-h-20" />
          <button type="submit" className="rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-emerald-300">
            Guardar en estado local
          </button>
          <p className="text-xs leading-5 text-slate-500">
            Nota: esta demo guarda la herramienta solo en memoria React. Para persistencia real, conecta localStorage, IndexedDB o una API.
          </p>
        </form>
      )}
    </section>
  );
}

function EmptyState() {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/50 p-10 text-center">
      <h3 className="text-xl font-black text-white">Sin resultados</h3>
      <p className="mt-2 text-slate-400">Prueba con otra categoría, curva de aprendizaje o término de búsqueda.</p>
    </div>
  );
}

export default function App() {
  const [customTools, setCustomTools] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [selectedLevel, setSelectedLevel] = useState("Todas");
  const [query, setQuery] = useState("");
  const [activeTool, setActiveTool] = useState(null);

  const baseTools = useMemo(() => flattenTools(IT_TOOLS_DB), []);
  const allTools = useMemo(() => [...baseTools, ...customTools], [baseTools, customTools]);
  const categories = useMemo(() => IT_TOOLS_DB.map((item) => item.category), []);

  const counts = useMemo(() => {
    return allTools.reduce((acc, tool) => {
      acc[tool.category] = (acc[tool.category] || 0) + 1;
      return acc;
    }, {});
  }, [allTools]);

  const filteredTools = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allTools.filter((tool) => {
      const matchesCategory = selectedCategory === "Todas" || tool.category === selectedCategory;
      const matchesLevel = selectedLevel === "Todas" || tool.learning === selectedLevel;
      const searchableText = [tool.name, tool.category, tool.description, tool.tip, ...tool.pros, ...tool.cons].join(" ").toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
      return matchesCategory && matchesLevel && matchesQuery;
    });
  }, [allTools, query, selectedCategory, selectedLevel]);

  function addTool(tool) {
    setCustomTools((current) => [...current, tool]);
  }

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <style>{`
        .input { border-radius: 1rem; border: 1px solid rgba(255,255,255,.10); background: rgba(2,6,23,.75); padding: .85rem 1rem; color: #e2e8f0; outline: none; }
        .input::placeholder { color: #64748b; }
        .input:focus { border-color: rgba(34,211,238,.55); box-shadow: 0 0 0 4px rgba(34,211,238,.16); }
        @media print {
          body { background: white !important; }
          article, section, aside, header { box-shadow: none !important; }
        }
      `}</style>

      <Header totalTools={allTools.length} onPrint={() => window.print()} />

      <main className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <div className="space-y-6">
          <Sidebar categories={categories} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} counts={counts} />
          <AddToolForm categories={categories} onAddTool={addTool} />
        </div>

        <div className="space-y-6">
          <SearchBar query={query} setQuery={setQuery} selectedLevel={selectedLevel} setSelectedLevel={setSelectedLevel} />

          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-2xl font-black text-white">Herramientas</h2>
              <p className="text-sm text-slate-400">Mostrando {filteredTools.length} de {allTools.length} registros.</p>
            </div>
          </div>

          {filteredTools.length === 0 ? (
            <EmptyState />
          ) : (
            <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={`${tool.category}-${tool.name}`} tool={tool} onOpen={setActiveTool} />
              ))}
            </section>
          )}
        </div>
      </main>

      <footer className="mx-auto max-w-7xl px-4 pb-10 pt-4 text-center text-xs text-slate-500 sm:px-6 lg:px-8">
        Diseñado para documentación interna, soporte técnico, laboratorios y operaciones IT. Revisa licencias, políticas de seguridad y autorización antes de usar herramientas en producción.
      </footer>

      <DetailModal tool={activeTool} onClose={() => setActiveTool(null)} />
    </div>
  );
}
