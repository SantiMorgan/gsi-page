import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';

import AppLayout from '@/components/layout/AppLayout';
import Home from '@/pages/Home';
import Resultados from '@/pages/Resultados';
import Propuesta from '@/pages/Propuesta';
import FAQ from '@/pages/FAQ';
import Contacto from '@/pages/Contacto';
import Terminos from '@/pages/Terminos';
import Privacidad from '@/pages/Privacidad';
import Seguridad from '@/pages/Seguridad';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/resultados" element={<Resultados />} />
            <Route path="/propuesta" element={<Propuesta />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/seguridad" element={<Seguridad />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App