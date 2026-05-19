import {
  Activity,
  BookOpen,
  Boxes,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileArchive,
  GraduationCap,
  HardDrive,
  MessageCircle,
  Network,
  Server,
  Shield,
  Terminal,
  Wrench,
} from "lucide-react";

export const learningStyles = {
  Baja: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Media: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  Alta: "bg-rose-500/15 text-rose-300 border-rose-500/30",
};

export const categoryIcons = {
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
  Default: ChevronRight,
};

export const resourceMeta = {
  official: { label: "Web oficial", icon: ExternalLink },
  download: { label: "Descarga", icon: Download },
  docs: { label: "Manual / Docs", icon: BookOpen },
  community: { label: "Foro / Comunidad", icon: MessageCircle },
  learn: { label: "Cursos / Recursos", icon: GraduationCap },
};
