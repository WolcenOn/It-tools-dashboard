const DATOS = {
    "category": "Datos",
    "description": "Clientes y herramientas para administrar bases de datos SQL/NoSQL y consultas.",
    "tools": [
      {
        "name": "DBeaver",
        "learning": "Media",
        "description": "Cliente universal para bases SQL y NoSQL con explorador, editor, diagramas y exportaciones.",
        "pros": [
          "Soporta múltiples motores",
          "Interfaz productiva",
          "Bueno para equipos mixtos"
        ],
        "cons": [
          "Puede consumir recursos",
          "Drivers y permisos requieren configuración"
        ],
        "tip": "Configura perfiles por entorno para evitar consultas en producción por error.",
        "resources": {
          "official": "https://dbeaver.io/",
          "download": "https://dbeaver.io/download/",
          "docs": "https://dbeaver.com/docs/dbeaver/",
          "community": "https://github.com/dbeaver/dbeaver/discussions",
          "learn": "https://dbeaver.com/docs/dbeaver/"
        }
      },
      {
        "name": "pgAdmin",
        "learning": "Media",
        "description": "Herramienta oficial de administración gráfica para PostgreSQL.",
        "pros": [
          "Especializada en PostgreSQL",
          "Gestión de objetos y consultas",
          "Buena para administración cotidiana"
        ],
        "cons": [
          "Menos universal que DBeaver",
          "Puede sentirse pesada"
        ],
        "tip": "Usa EXPLAIN ANALYZE para investigar consultas lentas.",
        "resources": {
          "official": "https://www.pgadmin.org/",
          "download": "https://www.pgadmin.org/download/",
          "docs": "https://www.pgadmin.org/docs/",
          "community": "https://www.postgresql.org/community/",
          "learn": "https://www.pgadmin.org/docs/pgadmin4/latest/getting_started.html"
        }
      },
      {
        "name": "MySQL Workbench",
        "learning": "Media",
        "description": "Cliente oficial para modelado, administración y consultas en MySQL.",
        "pros": [
          "Modelado visual",
          "Administración integrada",
          "Adecuado para entornos MySQL"
        ],
        "cons": [
          "Rendimiento irregular en proyectos grandes",
          "No es ideal para múltiples motores"
        ],
        "tip": "Valida planes de ejecución antes de añadir índices en caliente.",
        "resources": {
          "official": "https://www.mysql.com/products/workbench/",
          "download": "https://dev.mysql.com/downloads/workbench/",
          "docs": "https://dev.mysql.com/doc/workbench/en/",
          "community": "https://forums.mysql.com/",
          "learn": "https://dev.mysql.com/doc/workbench/en/"
        }
      },
      {
        "name": "SQL Server Management Studio",
        "learning": "Media",
        "description": "Consola principal para administrar Microsoft SQL Server, jobs, backups, seguridad y consultas.",
        "pros": [
          "Muy completo para SQL Server",
          "Integración con Agent",
          "Estándar en entornos Microsoft"
        ],
        "cons": [
          "Profundidad puede abrumar",
          "Instalación separada del motor"
        ],
        "tip": "Aprende Extended Events para diagnosticar rendimiento.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/ssms/sql-server-management-studio-ssms",
          "download": "https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms",
          "docs": "https://learn.microsoft.com/en-us/ssms/",
          "community": "https://techcommunity.microsoft.com/category/sql-server",
          "learn": "https://learn.microsoft.com/en-us/training/sql/"
        }
      },
      {
        "name": "Redis Insight",
        "learning": "Baja",
        "description": "Interfaz visual para explorar Redis, claves, TTL, streams, memoria y rendimiento básico.",
        "pros": [
          "Visualización clara",
          "Útil para debugging",
          "Ayuda con estructuras Redis"
        ],
        "cons": [
          "Debe protegerse el acceso",
          "No sustituye monitoreo de cluster"
        ],
        "tip": "Busca claves sin TTL en caches para detectar fugas lógicas.",
        "resources": {
          "official": "https://redis.io/insight/",
          "download": "https://redis.io/insight/#download",
          "docs": "https://redis.io/docs/latest/develop/tools/insight/",
          "community": "https://forum.redis.io/",
          "learn": "https://redis.io/learn/"
        }
      },
      {
        "name": "MongoDB Compass",
        "learning": "Baja",
        "description": "Cliente gráfico oficial para explorar colecciones, índices, documentos, agregaciones y rendimiento básico.",
        "pros": [
          "Interfaz intuitiva",
          "Bueno para inspección documental",
          "Ayuda con agregaciones"
        ],
        "cons": [
          "Operaciones masivas deben controlarse",
          "No reemplaza monitoreo de cluster"
        ],
        "tip": "Revisa índices y cardinalidad antes de culpar al hardware.",
        "resources": {
          "official": "https://www.mongodb.com/products/tools/compass",
          "download": "https://www.mongodb.com/try/download/compass",
          "docs": "https://www.mongodb.com/docs/compass/",
          "community": "https://www.mongodb.com/community/forums/",
          "learn": "https://learn.mongodb.com/"
        }
      }
    ]
  };

export default DATOS;
