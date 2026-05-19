const VIRTUALIZACION = {
    "category": "Virtualización",
    "description": "Hipervisores, laboratorios, consolidación de servidores y gestión de máquinas virtuales.",
    "tools": [
      {
        "name": "Proxmox VE",
        "learning": "Media",
        "description": "Plataforma open source de virtualización basada en KVM y LXC con clustering, backups, HA y gestión web.",
        "pros": [
          "Excelente para homelab y pymes",
          "Soporta VMs y LXC",
          "Buena integración con ZFS y Ceph"
        ],
        "cons": [
          "La HA requiere buen diseño",
          "Algunas funciones exigen experiencia"
        ],
        "tip": "Combínalo con ZFS snapshots y Proxmox Backup Server.",
        "resources": {
          "official": "https://www.proxmox.com/en/proxmox-virtual-environment",
          "download": "https://www.proxmox.com/en/downloads",
          "docs": "https://pve.proxmox.com/pve-docs/",
          "community": "https://forum.proxmox.com/",
          "learn": "https://www.proxmox.com/en/services/training"
        }
      },
      {
        "name": "VMware vSphere / ESXi",
        "learning": "Alta",
        "description": "Plataforma empresarial de virtualización para centros de datos, clusters, HA, DRS y gestión centralizada.",
        "pros": [
          "Madurez empresarial",
          "Ecosistema amplio",
          "Funciones avanzadas"
        ],
        "cons": [
          "Coste/licencia elevado",
          "Administración compleja en entornos grandes"
        ],
        "tip": "Documenta redes virtuales, datastores y políticas antes de cambios en clusters.",
        "resources": {
          "official": "https://www.vmware.com/products/cloud-infrastructure/vsphere",
          "download": "https://support.broadcom.com/",
          "docs": "https://docs.vmware.com/en/VMware-vSphere/",
          "community": "https://community.broadcom.com/vmware-cloud-foundation/home",
          "learn": "https://www.vmware.com/learning"
        }
      },
      {
        "name": "Hyper-V",
        "learning": "Media",
        "description": "Hipervisor de Microsoft integrado en Windows Server y Windows Pro/Enterprise.",
        "pros": [
          "Integración con Windows",
          "Bueno para labs y pymes",
          "PowerShell robusto"
        ],
        "cons": [
          "La gestión avanzada requiere tooling adicional",
          "Menor ecosistema que VMware en algunos escenarios"
        ],
        "tip": "Usa checkpoints con cuidado: no sustituyen backups.",
        "resources": {
          "official": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/hyper-v-technology-overview",
          "download": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/get-started/install-the-hyper-v-role-on-windows-server",
          "docs": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/",
          "community": "https://techcommunity.microsoft.com/",
          "learn": "https://learn.microsoft.com/en-us/training/"
        }
      },
      {
        "name": "VirtualBox",
        "learning": "Baja",
        "description": "Virtualizador de escritorio multiplataforma para laboratorios, pruebas y entornos aislados.",
        "pros": [
          "Gratis y accesible",
          "Fácil para pruebas rápidas",
          "Snapshots simples"
        ],
        "cons": [
          "No ideal para producción",
          "Rendimiento inferior a hipervisores bare-metal"
        ],
        "tip": "Elige NAT, bridge o host-only según aislamiento y acceso LAN.",
        "resources": {
          "official": "https://www.virtualbox.org/",
          "download": "https://www.virtualbox.org/wiki/Downloads",
          "docs": "https://www.virtualbox.org/manual/",
          "community": "https://forums.virtualbox.org/",
          "learn": "https://www.virtualbox.org/manual/"
        }
      },
      {
        "name": "KVM / QEMU",
        "learning": "Alta",
        "description": "Base de virtualización Linux usada por múltiples plataformas y clouds privados.",
        "pros": [
          "Rendimiento sólido",
          "Muy flexible",
          "Estándar en Linux"
        ],
        "cons": [
          "Administración manual compleja",
          "Requiere dominio de redes y storage Linux"
        ],
        "tip": "Gestiona con libvirt/virt-manager o automatización.",
        "resources": {
          "official": "https://www.linux-kvm.org/",
          "download": "https://www.qemu.org/download/",
          "docs": "https://www.qemu.org/docs/master/",
          "community": "https://forum.level1techs.com/c/software/kvm/",
          "learn": "https://wiki.archlinux.org/title/KVM"
        }
      },
      {
        "name": "Vagrant",
        "learning": "Media",
        "description": "Herramienta para crear entornos reproducibles sobre VirtualBox, VMware, Hyper-V y otros providers.",
        "pros": [
          "Entornos declarativos",
          "Ideal para labs reproducibles",
          "Integra provisioning"
        ],
        "cons": [
          "Puede ser lento con VMs pesadas",
          "Menos usado en stacks cloud-native modernos"
        ],
        "tip": "Versiona el Vagrantfile para compartir labs idénticos.",
        "resources": {
          "official": "https://developer.hashicorp.com/vagrant",
          "download": "https://developer.hashicorp.com/vagrant/downloads",
          "docs": "https://developer.hashicorp.com/vagrant/docs",
          "community": "https://discuss.hashicorp.com/c/vagrant/24",
          "learn": "https://developer.hashicorp.com/vagrant/tutorials"
        }
      }
    ]
  };

export default VIRTUALIZACION;
