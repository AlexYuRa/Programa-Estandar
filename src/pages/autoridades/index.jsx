import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AutoridadesIndex() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/autoridades/direccion', { replace: true });
  }, [navigate]);

  return null;
}