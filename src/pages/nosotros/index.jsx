import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NosotrosIndex() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/nosotros/mision-vision', { replace: true });
  }, [navigate]);

  return null;
}