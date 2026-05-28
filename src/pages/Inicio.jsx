import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import MisionCard from '../components/identidad/MisionCard';
import { mision, vision } from '../constants/identidad';

export default function Inicio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const accesosRapidos = [
    { titulo: "Plan de Estudios", descripcion: "Conoce nuestra malla curricular actualizada y moderna.", icono: "📚", link: "/academico/plan-estudios" },
    { titulo: "Plana Docente", descripcion: "Descubre a nuestros profesores e investigadores destacados.", icono: "👩‍🏫", link: "/autoridades/docentes" },
    { titulo: "Investigación", descripcion: "Explora nuestras líneas, proyectos y publicaciones.", icono: "🔬", link: "/investigacion/proyectos" },
    { titulo: "Admisión y Titulación", descripcion: "Requisitos y modalidades para obtener tu grado.", icono: "🎓", link: "/academico/titulacion" }
  ];

  const cifras = [
    { numero: "+50", etiqueta: "Años de Trayectoria" },
    { numero: "2500+", etiqueta: "Egresados Exitosos" },
    { numero: "100%", etiqueta: "Malla Actualizada" },
    { numero: "SINEACE", etiqueta: "Calidad Acreditada" }
  ];

  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative bg-pucp-blue-dark overflow-hidden text-white pt-24 pb-32 lg:pt-32 lg:pb-40">
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }} 
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[10%] w-[50%] h-[80%] rounded-full bg-secondary blur-3xl"
          />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }} 
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[60%] rounded-full bg-accent blur-3xl"
          />
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight mb-6">
              Formando a los líderes de la educación del mañana
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl font-body text-gray-200 mb-10 max-w-2xl leading-relaxed">
              Descubre una formación académica de excelencia, basada en la innovación pedagógica, investigación y el compromiso social.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Link to="/academico/plan-estudios">
                <Button variant="secondary" className="w-full sm:w-auto text-pucp-blue-dark">
                  Ver Plan de Estudios
                </Button>
              </Link>
              <Link to="/nosotros/historia">
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                  Conocer Historia
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cifras Destacadas */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 text-center">
            {cifras.map((cifra, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-2">{cifra.numero}</h3>
                <p className="text-gray-600 font-body text-sm md:text-base font-semibold">{cifra.etiqueta}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resumen Institucional */}
      <section className="py-16 md:py-24 bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle 
            title="Identidad Institucional" 
            subtitle="Nuestros pilares fundamentales que guían el proceso de enseñanza y aprendizaje en nuestra escuela."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <MisionCard 
              title="Nuestra Misión" 
              description={mision} 
              icon="🎯" 
            />
            <MisionCard 
              title="Nuestra Visión" 
              description={vision} 
              icon="👁️" 
            />
          </div>
        </div>
      </section>

      {/* Accesos Rápidos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Explora nuestra Escuela" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {accesosRapidos.map((acceso, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={acceso.link} className="block h-full">
                  <Card className="h-full p-8 hover:border-pucp-blue-light/50 transition-colors group cursor-pointer">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform origin-left">
                      {acceso.icono}
                    </div>
                    <h3 className="text-xl font-display font-bold text-primary mb-2">
                      {acceso.titulo}
                    </h3>
                    <p className="text-gray-600 font-body text-sm">
                      {acceso.descripcion}
                    </p>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}