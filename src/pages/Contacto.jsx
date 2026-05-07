import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="pt-24 lg:pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contacto</span>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 tracking-tight">
            Hablemos por WhatsApp
          </h1>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            La forma más rápida de hablar con nosotros. Respondemos al instante.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-6"
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5491140815363?text=Hola%2C%20quiero%20información%20sobre%20SafeTrack"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent/90 text-white font-semibold h-16 rounded-2xl transition-colors shadow-md text-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar por WhatsApp
          </a>

          {/* Contact info */}
          <div className="bg-secondary rounded-2xl p-8 space-y-5">
            <h3 className="text-base font-semibold text-foreground">Información de contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">WhatsApp</div>
                  <div className="text-sm font-medium text-foreground">+54 11 4081-5363</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="text-sm font-medium text-foreground">santiagomorganti01@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Ubicación</div>
                  <div className="text-sm font-medium text-foreground">Buenos Aires, Argentina</div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-base font-bold text-foreground mb-4">¿Por qué WhatsApp?</h3>
            <ul className="space-y-3">
              {[
                'Respuesta en minutos, no en días',
                'Atención directa, sin intermediarios',
                'Soporte 24/7 post-implementación',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}