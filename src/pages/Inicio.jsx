import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Card } from '../components/ui/Card';
import { BookOpen, Users, FlaskConical, GraduationCap, Handshake } from 'lucide-react';
import { Button } from '../components/ui/Button';
import frontImage from '../assets/frontunt.jpg';

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
    { titulo: "Plan de Estudios", descripcion: "Conoce nuestra malla curricular actualizada y moderna.", icono: <BookOpen className="w-10 h-10 text-secondary" />, link: "/academico#plan-estudios" },
    { titulo: "Plana Docente", descripcion: "Descubre a nuestros profesores e investigadores destacados.", icono: <Users className="w-10 h-10 text-secondary" />, link: "/autoridades#docentes" },
    { titulo: "Investigación", descripcion: "Explora nuestras líneas, proyectos y publicaciones.", icono: <FlaskConical className="w-10 h-10 text-secondary" />, link: "/investigacion#proyectos" },
    { titulo: "Grados y Títulos", descripcion: "Requisitos y procedimientos para obtener tu grado o título.", icono: <GraduationCap className="w-10 h-10 text-secondary" />, link: "/academico#titulacion" },
    { titulo: "Convenios", descripcion: "Nuestras alianzas estratégicas con colegios e instituciones.", icono: <Handshake className="w-10 h-10 text-secondary" />, link: "/nosotros#convenios-escuelas" }
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
      <section 
        className="relative overflow-hidden text-white pt-24 pb-32 lg:pt-32 lg:pb-40 bg-cover bg-center min-h-[600px] flex items-center"
        style={{ backgroundImage: `url(${frontImage})` }}
      >
        {/* Blue Overlay Diagonal */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(110deg,transparent_35%,rgba(0,45,98,0.9)_55%,rgba(0,45,98,1)_100%)]"></div>

        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:w-2/3 ml-auto flex flex-col items-end text-right mt-10"
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-display font-bold text-white mb-0 drop-shadow-md tracking-wide uppercase">
              Escuela profesional de
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl lg:text-8xl font-display font-black tracking-tighter leading-none mb-4 text-white" style={{ textShadow: '0 10px 25px rgba(0,0,0,0.5)' }}>
              Educación Primaria
            </motion.h1>

            <motion.p 
              variants={itemVariants} 
              className="text-xl md:text-2xl lg:text-3xl italic text-[#F58220] mb-10 font-semibold drop-shadow-md pr-4 lg:pr-24 text-right"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
            >
              "Maestros integrales para una educación que transforma vidas."
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-end">
              <Link to="/academico/plan-estudios">
                <Button variant="secondary" className="w-full sm:w-auto text-pucp-blue-dark font-bold">
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
      <section className="bg-white py-8 border-b border-gray-100">
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

      {/* Bienvenida de la Rectora y Video */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Columna de Texto */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-pucp-blue-dark uppercase mb-2">
                Bienvenida de la <span className="text-[#F58220]">Rectora</span>
              </h2>
              <div className="w-16 h-1 bg-[#F58220] mb-6"></div>
              
              <div className="text-gray-700 font-body space-y-4 text-justify leading-relaxed">
                <p>
                  "¡Bienvenidos a la Carrera de Educación Primaria! Este espacio educativo te invita a sumergirte en la asombrosa travesía de formar parte de la enseñanza fundamental. Prepárate para iniciar un viaje significativo, donde cultivarás habilidades esenciales y descubrirás la gratificación de guiar los primeros pasos en el aprendizaje de los más jóvenes."
                </p>
                <p>
                  "Estamos emocionados de acompañarte en este camino educativo, contribuyendo al desarrollo integral de los estudiantes en sus años iniciales de educación. ¡Comencemos juntos este emocionante viaje hacia un futuro repleto de descubrimientos y aprendizaje en la Educación Primaria!"
                </p>
              </div>
            </motion.div>

            {/* Columna de Video */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-xl overflow-hidden shadow-2xl relative border-4 border-gray-50"
              style={{ paddingTop: '56.25%' }}
            >
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/6mmdvUizSbk?start=7" 
                title="Video Institucional Educación Primaria UNT" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>



      {/* Accesos Rápidos */}
      <section className="py-10 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionTitle title="Explora nuestra Escuela" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-10">
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