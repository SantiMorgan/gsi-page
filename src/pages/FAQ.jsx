import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: '¿Qué tan seguros están los datos de mi flota?',
    a: 'SafeTrack utiliza encriptación AES-256 de grado militar, servidores con respaldo redundante y acceso controlado por roles. Cumplimos con las normas más estrictas de protección de datos del sector público.',
  },
  {
    q: '¿Se puede acceder desde el celular?',
    a: 'Sí. SafeTrack está 100% optimizado para dispositivos móviles. Los técnicos del taller, conductores y directores pueden acceder desde cualquier smartphone o tablet sin necesidad de instalar una app.',
  },
  {
    q: '¿Es necesario capacitar al personal para usar el sistema?',
    a: 'No. La interfaz fue diseñada para que cualquier persona pueda usarla sin conocimientos técnicos. Además, nosotros nos hacemos cargo de la capacitación inicial y del acompañamiento continuo. Su equipo no queda solo.',
  },
  {
    q: '¿Quién se hace responsable si algo falla?',
    a: 'Nosotros. SafeTrack asume la responsabilidad como proveedor. Ante cualquier inconveniente, nuestro equipo responde de forma directa y rápida por WhatsApp, sin derivar a terceros ni generar tickets. El problema es nuestro, no suyo.',
  },
  {
    q: '¿Cuánto tiempo lleva implementar SafeTrack?',
    a: 'La implementación estándar demora 48 horas hábiles. Incluye carga inicial de datos, configuración de usuarios y alertas, y acompañamiento de nuestro equipo. Su personal no necesita hacer nada técnico.',
  },
  {
    q: '¿Puedo exportar la información para auditorías?',
    a: 'Absolutamente. SafeTrack permite exportar informes detallados en PDF y Excel, listos para presentar ante entes auditores o de control. Cada registro incluye marca de tiempo y usuario responsable.',
  },
  {
    q: '¿Funciona para flotas pequeñas también?',
    a: 'Sí. SafeTrack es escalable y se adapta tanto a municipios con 20 vehículos como a flotas de +500 unidades. El plan se ajusta a las necesidades de cada entidad pública.',
  },
];

export default function FAQ() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="w-7 h-7 text-primary" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-muted-foreground mt-4">
            Todo lo que necesita saber. Si tiene dudas, nosotros las resolvemos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card rounded-xl border border-border shadow-sm px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-5 hover:no-underline text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16 space-y-3"
        >
          <p className="text-muted-foreground">¿Tiene otra consulta?</p>
          <Link to="/contacto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 group">
              Contáctenos
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}