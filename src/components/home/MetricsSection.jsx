import React from 'react';
import { TrendingDown, Clock, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const metrics = [
  {
    icon: TrendingDown,
    value: '30%',
    label: 'Reducción en gastos de mantenimiento correctivo',
    description: 'Menos reparaciones de emergencia gracias al mantenimiento preventivo automatizado.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Clock,
    value: '+25%',
    label: 'Disponibilidad de la flota',
    description: 'Menos tiempo parados. Más vehículos operativos cuando los necesita.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: FileCheck,
    value: '100%',
    label: 'Trazabilidad de presupuestos y repuestos',
    description: 'Cada peso invertido queda documentado, verificable y auditable.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export default function MetricsSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Resultados Reales</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 tracking-tight">
            Impacto medible desde el día uno
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`w-12 h-12 rounded-xl ${metric.bg} flex items-center justify-center mb-6`}>
                <metric.icon className={`w-6 h-6 ${metric.color}`} />
              </div>
              <div className={`text-4xl font-extrabold ${metric.color} mb-3`}>
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                {metric.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}