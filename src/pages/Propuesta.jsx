import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Zap,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Clock,
  Lock,
  Users,
} from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Puesta en Marcha Inmediata',
    description: 'Configuración total y carga de tu flota en menos de 48 horas. Sin demoras técnicas, el sistema queda operativo desde el primer día sin requerir conocimientos previos de su equipo.',
    highlights: ['Alta y configuración completa incluida', 'Carga inicial de vehículos y datos', 'Operativo en menos de 48 horas'],
  },
  {
    icon: MessageCircle,
    title: 'Acompañamiento Directo 24/7',
    description: 'Soporte técnico humano por WhatsApp y capacitación continua para todo el personal municipal. No desaparecemos tras la implementación — estamos siempre disponibles.',
    highlights: ['Soporte directo por WhatsApp, sin tickets', 'Capacitación incluida para todo el personal', 'Acompañamiento permanente post-implementación'],
  },
  {
    icon: ShieldCheck,
    title: 'Control y Transparencia Total',
    description: 'Digitalización completa de ingresos a taller, tiempos de reparación y respaldo de gastos para auditorías. Cada operación queda registrada, firmada y disponible para organismos de control.',
    highlights: ['Registro digital de cada intervención', 'Respaldo de comprobantes para auditorías', 'Transparencia en rendición de cuentas municipales'],
  },
];

const techPoints = [
  { icon: Clock, label: 'Implementación en menos de 48hs' },
  { icon: Lock, label: 'Datos encriptados AES-256' },
  { icon: Users, label: 'Soporte 24/7 vía WhatsApp' },
];

export default function Propuesta() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Propuesta Técnica</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight">
            La responsabilidad es nuestra
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            Su equipo no necesita ser experto en tecnología. Nosotros implementamos, configuramos y garantizamos que el sistema funcione. Siempre.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-5xl mx-auto mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
            >
              <div className="p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="lg:w-72 shrink-0 space-y-3">
                    {feature.highlights.map(h => (
                      <div key={h} className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className="text-sm font-medium text-foreground">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech info bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16"
        >
          {techPoints.map(tp => (
            <div key={tp.label} className="flex items-center gap-3 text-sm text-muted-foreground">
              <tp.icon className="w-5 h-5 text-primary" />
              <span className="font-medium">{tp.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link to="/contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 group">
              Solicitar Propuesta
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}