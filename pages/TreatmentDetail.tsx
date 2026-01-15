import React from 'react';
import { Navigate } from 'react-router-dom';
import { Language } from '../types';

const TreatmentDetail: React.FC<{ lang: Language }> = () => {
  return <Navigate to="/work" />;
};

export default TreatmentDetail;