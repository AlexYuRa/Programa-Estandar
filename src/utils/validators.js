/**
 * Utilidades para validación de formularios
 */

export function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validarTelefono(telefono) {
  const regex = /^(\+51|0)?9\d{8}$/;
  return regex.test(telefono.replace(/\s/g, ''));
}

export function validarNombre(nombre) {
  return nombre && nombre.trim().length >= 2;
}

export function validarAsunto(asunto) {
  return asunto && asunto.trim().length >= 3;
}

export function validarMensaje(mensaje) {
  return mensaje && mensaje.trim().length >= 10;
}

export function validarFormularioContacto(formData) {
  const errores = {};

  if (!validarNombre(formData.nombre)) {
    errores.nombre = 'El nombre debe tener al menos 2 caracteres';
  }

  if (!validarEmail(formData.email)) {
    errores.email = 'Por favor ingresa un email válido';
  }

  if (!validarAsunto(formData.asunto)) {
    errores.asunto = 'El asunto debe tener al menos 3 caracteres';
  }

  if (!validarMensaje(formData.mensaje)) {
    errores.mensaje = 'El mensaje debe tener al menos 10 caracteres';
  }

  return {
    esValido: Object.keys(errores).length === 0,
    errores
  };
}

export function validarURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
