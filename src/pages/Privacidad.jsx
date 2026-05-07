import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export default function Privacidad() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <Shield className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Política de Privacidad</h1>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: mayo 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-8"
        >
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Información que Recopilamos</h2>
            <p className="text-muted-foreground leading-relaxed">
              SafeTrack recopila únicamente la información necesaria para prestar el servicio: datos de la entidad pública contratante, información del personal autorizado (nombre, cargo, contacto), y datos operativos de la flota vehicular ingresados por el propio cliente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Cómo Usamos la Información</h2>
            <p className="text-muted-foreground leading-relaxed">
              La información recopilada se utiliza exclusivamente para:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Prestar y mejorar el servicio de gestión de flotas.</li>
              <li>Generar reportes y estadísticas para el propio cliente.</li>
              <li>Enviar notificaciones y alertas operativas.</li>
              <li>Brindar soporte técnico.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              En ningún caso vendemos, alquilamos ni compartimos datos con terceros sin consentimiento expreso del cliente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Almacenamiento y Retención</h2>
            <p className="text-muted-foreground leading-relaxed">
              Los datos se almacenan en servidores con ubicación en Argentina y/o Estados Unidos bajo proveedores certificados. Los datos se conservan durante la vigencia del contrato y hasta 12 meses después de su finalización, salvo requerimiento legal que exija mayor plazo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Derechos del Titular de los Datos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Conforme a la Ley 25.326 de Protección de Datos Personales de Argentina, el cliente tiene derecho a acceder, rectificar, actualizar y suprimir sus datos personales. Para ejercer estos derechos, debe contactarnos por escrito a <strong>santiagomorganti01@gmail.com</strong>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              La plataforma utiliza cookies técnicas necesarias para el funcionamiento del servicio (autenticación, sesión). No utilizamos cookies de rastreo publicitario de terceros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Cambios a esta Política</h2>
            <p className="text-muted-foreground leading-relaxed">
              Podemos actualizar esta política periódicamente. Notificaremos cualquier cambio relevante a los clientes activos con al menos 15 días de anticipación.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">7. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para consultas sobre privacidad y protección de datos: <strong>santiagomorganti01@gmail.com</strong> o WhatsApp al <strong>+54 11 4081-5363</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}