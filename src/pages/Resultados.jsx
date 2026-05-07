import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  TrendingDown,
  Clock,
  FileCheck,
  ClipboardList,
  Bell,
  FolderOpen,
  ArrowRight,
  BarChart3,
  AlertTriangle,
  CalendarClock,
} from 'lucide-react';

const stats = [
  { value: '100%', label: 'Trazabilidad de cada gasto', sub: 'Cada peso documentado y auditable' },
  { value: '+25%', label: 'Disponibilidad operativa de la flota', sub: 'Menos días frenados en taller' },
  { value: '0', label: 'Vencimientos de VTV sin aviso', sub: 'Alertas preventivas automáticas' },
];

const benefits = [
  {
    icon: BarChart3,
    title: 'Control de Inversión',
    description: 'Historial financiero de los últimos 6 meses por unidad. Tomá decisiones presupuestarias con datos reales de cada vehículo de la flota municipal.',
  },
  {
    icon: Clock,
    title: 'Reducción de Tiempos Muertos',
    description: 'Seguimiento exacto de los días que cada vehículo estuvo inmovilizado en el taller. Identificá cuellos de botella y mejorá la operatividad.',
  },
  {
    icon: Bell,
    title: 'Cero Vencimientos de VTV',
    description: 'Alertas legales preventivas automáticas para VTV, seguros y services. Nunca más un vehículo circulando fuera de norma.',
  },
  {
    icon: AlertTriangle,
    title: 'Identificación de Unidades Críticas',
    description: 'Ranking Top 5 de vehículos con mayor gasto acumulado. Detectá qué unidades requieren renovación o intervención prioritaria.',
  },
  {
    icon: CalendarClock,
    title: 'Previsión Presupuestaria',
    description: 'Planificá los mantenimientos futuros con base en el historial real de cada vehículo. Optimizá el presupuesto municipal de forma anticipada.',
  },
  {
    icon: FolderOpen,
    title: 'Archivo Digital',
    description: 'Respaldo digital de comprobantes, facturas y documentación de cada intervención. Siempre disponible para auditorías internas y organismos de control.',
  },
];

export default function Resultados() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resultados Reales</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 tracking-tight leading-tight">
            Impacto medible desde el{' '}
            <span className="text-primary">primer día</span>
          </h1>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            SafeTrack transforma la gestión de la flota municipal en un centro de control, transparencia y rendición de cuentas.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm text-center"
            >
              <div className="text-4xl font-extrabold text-primary">{item.value}</div>
              <div className="text-sm font-semibold text-foreground mt-3 leading-snug">{item.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits list */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-5 bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 group">
              Solicitar Demo Gratuita
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}