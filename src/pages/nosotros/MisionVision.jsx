import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import MisionCard from '../../components/identidad/MisionCard';
import ValorItem from '../../components/identidad/ValorItem';
import { mision, vision, valores } from '../../constants/identidad';

export default function MisionVision() {
  return (
    <PageWrapper>
      <div className="bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Misión y Visión" center subtitle="Los propósitos que guían nuestro camino hacia la excelencia educativa." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-20 max-w-5xl mx-auto">
            <MisionCard title="Nuestra Misión" description={mision} icon="🎯" />
            <MisionCard title="Nuestra Visión" description={vision} icon="👁️" />
          </div>

          <SectionTitle title="Nuestros Valores" center subtitle="Los principios éticos y morales que sustentan nuestra comunidad universitaria." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {valores.map((valor, idx) => (
              <ValorItem key={idx} valor={valor} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}