import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import MetricsSection from '@/components/home/MetricsSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import BannerSection from '@/components/home/BannerSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <BenefitsSection />
      <BannerSection />
    </>
  );
}