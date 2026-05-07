import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  DollarSign,
  Clock,
  FileText,
  MessageSquare,
  Bell,
  Smartphone,
  FolderOpen,
  TrendingUp,
} from 'lucide-react';

const benefits = [
  {
    icon: ClipboardList,
    title: 'Historial Completo de cada Vehículo',
    description: 'Sabés cuándo necesita VTV, service o qué reparaciones se le hicieron. Menos sorpresas y más vehículos operativos.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: DollarSign,
    title: 'Control Total de Gastos del Taller',
    description: 'Ves exactamente cuánto se gasta en cada reparación y vehículo, mes a mes. Controlá tu presupuesto y mejorá la rentabilidad.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Clock,
    title: 'Menos Carga Administrativa',
    description: 'El sistema automatiza el registro, la documentación y los informes. Su equipo dedica tiempo a lo que importa, no al papeleo.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: FileText,
    title: 'Reportes de Disponibilidad y Seguimiento',
    description: 'Visualizá cuánto tiempo estuvo cada vehículo frenado en el taller y qué reparaciones se realizaron. Generá informes para dirección que faciliten la toma de decisiones sobre la operatividad y renovación de la flota.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: MessageSquare,
    title: 'Respaldo ante Auditorías',
    description: 'Todo queda registrado y firmado digitalmente. Ante cualquier control o auditoría, los datos están disponibles al instante y son irrefutables.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Bell,
    title: 'Alertas Inteligentes para Evitar Problemas',
    description: 'Recibís avisos automáticos sobre VTVs por vencer o services pendientes. Adelantate a los problemas antes de que ocurran.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: Smartphone,
    title: 'Accedé desde Cualquier Lugar',
    description: 'Revisá el estado de un vehículo, los gastos o la planificación del taller desde tu teléfono o tablet. Sin necesidad de estar en la oficina.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: FolderOpen,
    title: 'Menos Papeles, Más Orden',
    description: 'Todo se guarda de forma digital y segura. Fácil de encontrar cuando lo necesitás, sin archivos físicos.',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: TrendingUp,
    title: 'Soporte Continuo Sin Costo Extra',
    description: 'No desaparecemos tras la implementación. Acompañamos a su equipo de forma permanente por WhatsApp, sin tickets ni esperas.',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Beneficios del Sistema</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3 tracking-tight">
            Menos problemas para su equipo
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Asumimos la responsabilidad de que todo funcione. Su personal no necesita ser técnico ni experto — nosotros nos ocupamos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className={`w-11 h-11 rounded-xl ${benefit.bg} flex items-center justify-center mb-5`}>
                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}