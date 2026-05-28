export const director = {
  nombre: "Dra. María Elena Vargas Cárdenas",
  cargo: "Directora de la Escuela Profesional",
  correo: "direccion.primaria@universidad.edu.pe",
  bio: "Doctora en Ciencias de la Educación con más de 25 años de experiencia en gestión educativa y políticas públicas orientadas a la niñez.",
  foto: null // Placeholder
};

export const coordinadores = [
  {
    nombre: "Mg. Roberto Carlos Mendoza",
    cargo: "Coordinador Académico",
    correo: "acad.primaria@universidad.edu.pe"
  },
  {
    nombre: "Dra. Patricia Salinas",
    cargo: "Coordinadora de Investigación",
    correo: "investiga.primaria@universidad.edu.pe"
  },
  {
    nombre: "Mg. Luis Fernando Gómez",
    cargo: "Coordinador de Prácticas Preprofesionales",
    correo: "practicas.primaria@universidad.edu.pe"
  }
];

export const organigrama = {
  nombre: "Dirección de Escuela",
  cargo: "Dra. María Elena Vargas",
  hijos: [
    {
      nombre: "Coordinación Académica",
      cargo: "Mg. Roberto Carlos Mendoza",
      hijos: [
        { nombre: "Comité de Currículo", cargo: "" },
        { nombre: "Tutoría y Asesoría", cargo: "" }
      ]
    },
    {
      nombre: "Coordinación de Investigación",
      cargo: "Dra. Patricia Salinas"
    },
    {
      nombre: "Prácticas Preprofesionales",
      cargo: "Mg. Luis Fernando Gómez"
    }
  ]
};