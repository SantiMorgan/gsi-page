import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Server, Eye, KeyRound } from 'lucide-react';

const items = [
  {
    icon: Lock,
    title: 'Encriptación AES-256',
    description: 'Todos los datos almacenados y en tránsito están protegidos con encriptación AES-256, el estándar de seguridad utilizado por instituciones financieras y gubernamentales a nivel mundial.',
  },
  {
    icon: Server,
    title: 'Infraestructura Redundante',
    description: 'Operamos sobre infraestructura con redundancia geográfica y backups automáticos diarios. Ante cualquier falla de hardware, los datos se recuperan sin pérdida de información.',
  },
  {
    icon: Eye,
    title: 'Control de Acceso por Roles',
    description: 'Cada usuario accede únicamente a la información que le corresponde según su rol (director, técnico, conductor). Los accesos se auditan y registran automáticamente.',
  },
  {
    icon: KeyRound,
    title: 'Autenticación Segura',
    description: 'El acceso a la plataforma requiere credenciales únicas por usuario. Contamos con mecanismos de expiración de sesión y bloqueo por intentos fallidos.',
  },
];

export default function Seguridad() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Seguridad de Datos</h1>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            La seguridad de la información de su municipio es nuestra prioridad. Implementamos múltiples capas de protección para garantizar la integridad y confidencialidad de sus datos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-5"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-card rounded-2xl border border-border p-7 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-base font-semibold text-foreground mb-2">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="bg-secondary rounded-2xl p-7 mt-4">
            <h2 className="text-base font-semibold text-foreground mb-3">Cumplimiento Normativo</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              SafeTrack cumple con la <strong>Ley 25.326 de Protección de Datos Personales</strong> de Argentina y las disposiciones de la Dirección Nacional de Protección de Datos Personales (DNPDP). Para reportar una vulnerabilidad de seguridad, contáctenos en <strong>santiagomorganti01@gmail.com</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}