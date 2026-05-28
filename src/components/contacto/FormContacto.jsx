import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { validarFormularioContacto } from '../../utils/validators';

export default function FormContacto() {
  const [formData, setFormData] = useState({ nombre: '', email: '', asunto: '', mensaje: '' });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errores[e.target.name]) {
      setErrores({ ...errores, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validarFormularioContacto(formData);
    if (validacion.esValido) {
      setEnviado(true);
      // Aquí iría la lógica de envío real a un API backend
    } else {
      setErrores(validacion.errores);
    }
  };

  if (enviado) {
    return (
      <div className="bg-success/10 text-success p-8 rounded-xl text-center border border-success/20 animate-fade-in">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-xl font-display font-bold mb-2">¡Mensaje Enviado!</h3>
        <p className="text-sm">Gracias por contactarnos. Te responderemos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Tu nombre completo" className={`w-full p-3 rounded-lg border ${errores.nombre ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`} />
        {errores.nombre && <span className="text-xs text-red-500 mt-1 block">{errores.nombre}</span>}
      </div>
      <div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Tu correo electrónico" className={`w-full p-3 rounded-lg border ${errores.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`} />
        {errores.email && <span className="text-xs text-red-500 mt-1 block">{errores.email}</span>}
      </div>
      <div>
        <input type="text" name="asunto" value={formData.asunto} onChange={handleChange} placeholder="Asunto del mensaje" className={`w-full p-3 rounded-lg border ${errores.asunto ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm`} />
        {errores.asunto && <span className="text-xs text-red-500 mt-1 block">{errores.asunto}</span>}
      </div>
      <div>
        <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="4" placeholder="Escribe tu mensaje aquí..." className={`w-full p-3 rounded-lg border ${errores.mensaje ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none`}></textarea>
        {errores.mensaje && <span className="text-xs text-red-500 mt-1 block">{errores.mensaje}</span>}
      </div>
      <Button type="submit" className="w-full text-sm py-3">Enviar Mensaje</Button>
    </form>
  );
}