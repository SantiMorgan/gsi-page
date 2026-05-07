import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BannerSection() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-10 lg:p-16"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-accent/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-semibold text-primary-foreground/90">Oferta Especial</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground leading-tight">
                Plan Municipio Digital
              </h2>
              <p className="text-lg text-primary-foreground/80 max-w-lg">
                60 días bonificados para nuevas implementaciones. Comience a optimizar su flota sin costo inicial.
              </p>
            </div>
            <Link to="/contacto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold px-8 h-13 text-base shadow-lg group whitespace-nowrap"
              >
                Activar ahora
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}