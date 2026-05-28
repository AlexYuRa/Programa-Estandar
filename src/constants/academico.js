export const gradoAcademico = "Bachiller en Ciencias de la Educación";
export const tituloProfesional = "Licenciado en Educación Primaria";

export const perfilEgresado = [
  {
    area: "Dimensión Pedagógica",
    descripcion: "Diseña, implementa y evalúa procesos de enseñanza-aprendizaje pertinentes a las características y necesidades de los estudiantes de educación primaria, empleando enfoques pedagógicos contemporáneos."
  },
  {
    area: "Dimensión Investigativa",
    descripcion: "Desarrolla proyectos de investigación acción y aplicada para resolver problemas educativos de su entorno, generando conocimiento pedagógico innovador."
  },
  {
    area: "Dimensión Sociocultural",
    descripcion: "Promueve un clima escolar democrático, intercultural e inclusivo, estableciendo alianzas estratégicas con las familias y la comunidad."
  },
  {
    area: "Dimensión Personal y Tecnológica",
    descripcion: "Ejerce liderazgo ético y reflexivo, integrando las Tecnologías de la Información y Comunicación (TIC) de manera crítica en su práctica profesional."
  }
];

export const planEstudios = [
  {
    ciclo: "I Ciclo",
    cursos: [
      { codigo: "EG101", nombre: "Comunicación y Redacción", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EG102", nombre: "Matemática Básica", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP101", nombre: "Introducción a la Pedagogía", creditos: 3, tipo: "Obligatorio" },
      { codigo: "EP102", nombre: "Psicología del Desarrollo Infantil", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EG103", nombre: "Tecnologías de la Información", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "II Ciclo",
    cursos: [
      { codigo: "EG201", nombre: "Realidad Nacional y Ciudadanía", creditos: 3, tipo: "Obligatorio" },
      { codigo: "EP201", nombre: "Didáctica General", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP202", nombre: "Psicología del Aprendizaje", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP203", nombre: "Neurociencia Educativa", creditos: 3, tipo: "Electivo" },
      { codigo: "EP204", nombre: "Teorías Sociológicas de la Educación", creditos: 3, tipo: "Obligatorio" }
    ]
  },
  {
    ciclo: "III Ciclo",
    cursos: [
      { codigo: "EP301", nombre: "Didáctica de la Matemática I", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP302", nombre: "Didáctica de la Comunicación I", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP303", nombre: "Currículo de Educación Primaria", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP304", nombre: "Educación Inclusiva", creditos: 3, tipo: "Obligatorio" },
      { codigo: "EP305", nombre: "Arte y Creatividad", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "IV Ciclo",
    cursos: [
      { codigo: "EP401", nombre: "Didáctica de la Matemática II", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP402", nombre: "Didáctica de la Comunicación II", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP403", nombre: "Didáctica de Personal Social", creditos: 3, tipo: "Obligatorio" },
      { codigo: "EP404", nombre: "Práctica Preprofesional I: Observación", creditos: 5, tipo: "Obligatorio" },
      { codigo: "EP405", nombre: "Materiales Educativos", creditos: 3, tipo: "Electivo" }
    ]
  },
  {
    ciclo: "V Ciclo",
    cursos: [
      { codigo: "EP501", nombre: "Didáctica de Ciencia y Tecnología", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP502", nombre: "Evaluación de los Aprendizajes", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP503", nombre: "Metodología de la Investigación Educativa", creditos: 4, tipo: "Obligatorio" },
      { codigo: "EP504", nombre: "Práctica Preprofesional II: Ayudantía", creditos: 6, tipo: "Obligatorio" },
      { codigo: "EP505", nombre: "Educación Psicomotriz", creditos: 3, tipo: "Electivo" }
    ]
  }
];

export const titulacion = [
  {
    modalidad: "Tesis de Grado",
    descripcion: "Elaboración, presentación y sustentación de un trabajo de investigación original que aborde una problemática educativa del nivel primario.",
    requisitos: [
      "Grado de Bachiller",
      "Aprobación del proyecto de tesis",
      "Constancia de egresado"
    ]
  },
  {
    modalidad: "Trabajo de Suficiencia Profesional",
    descripcion: "Demostración de competencias profesionales a través de la sistematización de una experiencia docente de mínimo un año.",
    requisitos: [
      "Grado de Bachiller",
      "Acreditar mínimo 1 año de experiencia profesional en docencia primaria documentada",
    ]
  }
];