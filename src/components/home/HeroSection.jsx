import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Shield, Truck, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground border border-accent/20 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-accent" style={{ color: 'hsl(145, 69%, 39%)' }}>
                Plan Municipio Digital — 60 días bonificados
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Nosotros nos hacemos{' '}
              <span className="text-primary">cargo</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Implementamos, capacitamos y acompañamos a su equipo durante todo el proceso. Usted enfocado en su trabajo, nosotros en que el sistema funcione.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contacto">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12 text-base shadow-md group">
                  Solicitar Demo
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/propuesta">
                <Button size="lg" variant="outline" className="border-border text-foreground font-semibold px-8 h-12 text-base group">
                  <Play className="w-4 h-4 mr-2" />
                  Ver Propuesta
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-2 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>Soporte directo incluido</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                <span>Sin necesidad de expertos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span>Implementación en 48hs</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 border border-border/50">
              <div className="space-y-4">
                {/* Mock dashboard */}
                {/* KPI Cards */}
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { label: 'Vehículos Activos', value: '17', color: 'text-foreground' },
                    { label: 'Gasto del Mes', value: '$0', color: 'text-accent' },
                    { label: 'Pend. Presupuesto', value: '6', color: 'text-yellow-500' },
                    { label: 'En Reparación', value: '5', color: 'text-purple-500' },
                  ].map(item => (
                    <div key={item.label} className="bg-background rounded-xl p-3 shadow-sm border border-border">
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wide leading-tight mb-1">{item.label}</div>
                      <div className={`text-xl font-bold ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Charts row */}
                <div className="grid grid-cols-5 gap-3">
                  {/* Bar chart */}
                  <div className="col-span-3 bg-background rounded-xl p-4 shadow-sm border border-border">
                    <div className="text-xs font-semibold text-foreground mb-3">↗ Evolución de Gastos (Últimos 6 Meses)</div>
                    <div className="flex items-end gap-2 h-20">
                      {[
                        { mes: 'dic', h: 65 },
                        { mes: 'ene', h: 75 },
                        { mes: 'feb', h: 20 },
                        { mes: 'mar', h: 45 },
                        { mes: 'abr', h: 90 },
                        { mes: 'may', h: 10 },
                      ].map(bar => (
                        <div key={bar.mes} className="flex-1 flex flex-col items-center gap-1">
                          <div
                            className="w-full rounded-sm bg-primary"
                            style={{ height: `${bar.h}%` }}
                          />
                          <span className="text-[9px] text-muted-foreground">{bar.mes}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top vehicles */}
                  <div className="col-span-2 bg-background rounded-xl p-4 shadow-sm border border-border">
                    <div className="text-xs font-semibold text-foreground mb-3">Top 5 Mayor Gasto</div>
                    <div className="space-y-2">
                      {[
                        { pat: 'AC901IJ', val: 220, w: '100%' },
                        { pat: 'AA456NO', val: 185, w: '84%' },
                        { pat: 'OP345QR', val: 162, w: '74%' },
                        { pat: 'AB123CD', val: 150, w: '68%' },
                        { pat: 'NRE475', val: 110, w: '50%' },
                      ].map((v, i) => (
                        <div key={v.pat} className="flex items-center gap-2">
                          <span className="text-[9px] text-muted-foreground w-2">{i + 1}</span>
                          <div className="flex-1">
                            <div className="text-[9px] font-medium text-foreground">{v.pat}</div>
                            <div className="h-1 bg-muted rounded-full mt-0.5">
                              <div className="h-full bg-primary rounded-full" style={{ width: v.w }} />
                            </div>
                          </div>
                          <span className="text-[9px] font-semibold text-primary">${v.val}K</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}