import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function Terminos() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Términos y Condiciones</h1>
          <p className="text-sm text-muted-foreground mt-2">Última actualización: mayo 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-slate max-w-none space-y-8 text-foreground"
        >
          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">1. Aceptación de los Términos</h2>
            <p className="text-muted-foreground leading-relaxed">
              Al acceder y utilizar la plataforma SafeTrack (Gestión de Sistemas Integrados), usted acepta quedar vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguno de los términos aquí establecidos, le solicitamos que no utilice nuestros servicios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">2. Descripción del Servicio</h2>
            <p className="text-muted-foreground leading-relaxed">
              SafeTrack es una plataforma digital de gestión de flotas vehiculares orientada al sector público municipal. Ofrece funcionalidades de registro de vehículos, historial de mantenimiento, control de gastos, generación de reportes y alertas automatizadas. El servicio se presta bajo la modalidad SaaS (Software como Servicio).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">3. Uso Aceptable</h2>
            <p className="text-muted-foreground leading-relaxed">
              El usuario se compromete a utilizar la plataforma exclusivamente para fines lícitos relacionados con la gestión de flotas municipales. Queda prohibido el uso de la plataforma para fines fraudulentos, la carga de información falsa, o cualquier acción que comprometa la integridad del sistema o de otros usuarios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">4. Cuentas de Usuario</h2>
            <p className="text-muted-foreground leading-relaxed">
              Cada municipio o entidad pública recibirá credenciales de acceso únicas. El cliente es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades que se realicen bajo su cuenta. En caso de acceso no autorizado, debe notificarnos de inmediato.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">5. Propiedad Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo el software, diseño, código y contenido de la plataforma SafeTrack es propiedad exclusiva de sus desarrolladores. Queda prohibida la reproducción, distribución, modificación o uso comercial sin autorización expresa y por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">6. Limitación de Responsabilidad</h2>
            <p className="text-muted-foreground leading-relaxed">
              SafeTrack no será responsable por daños indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del servicio. Nos comprometemos a mantener una disponibilidad mínima del 99% mensual y a comunicar de forma anticipada cualquier mantenimiento programado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">7. Modificaciones</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios significativos serán notificados con al menos 15 días de anticipación mediante comunicación directa al cliente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">8. Jurisdicción</h2>
            <p className="text-muted-foreground leading-relaxed">
              Estos términos se rigen por las leyes de la República Argentina. Cualquier controversia será sometida a los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">9. Contacto</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para consultas sobre estos términos, puede contactarnos en <strong>santiagomorganti01@gmail.com</strong> o por WhatsApp al <strong>+54 11 4081-5363</strong>.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
}