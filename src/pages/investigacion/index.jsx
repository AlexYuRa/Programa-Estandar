import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InvestigacionIndex() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/investigacion/lineas', { replace: true });
  }, [navigate]);

  return null;
}