import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AcademicoIndex() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/academico/plan-estudios', { replace: true });
  }, [navigate]);

  return null;
}