import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import { SectionTitle } from '../../components/ui/SectionTitle';
import ConvenioCard from '../../components/investigacion/ConvenioCard';
import { convenios } from '../../constants/investigacion';

export default function Convenios() {
  return (
    <PageWrapper>
      <div className="bg-white py-16 lg:py-24 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Convenios Institucionales" center subtitle="Alianzas estratégicas que potencian el desarrollo académico y las prácticas profesionales." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {convenios.map((convenio, idx) => (
              <ConvenioCard key={idx} convenio={convenio} />
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}