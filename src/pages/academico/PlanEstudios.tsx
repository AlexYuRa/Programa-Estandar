import { SectionTitle } from '../../components/ui/SectionTitle';
import MallaFlow from '../../components/academico/MallaFlow';

export default function PlanEstudios() {
  return (
    <div className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle
          title="Plan de **Estudios**"
          center
          subtitle="Explora la malla como un mapa interactivo: cada curso muestra créditos, horas y prerrequisitos. Toca un curso para ver su detalle."
        />

        <div className="mt-10">
          <MallaFlow />
        </div>
      </div>
    </div>
  );
}
