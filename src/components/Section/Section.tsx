import React from 'react';
import { ISectionProps } from '../../interfaces';
import { Container } from './Section.styled';

export const Section = ({ title, children }: ISectionProps) => {
  return (
    <Container>
      <h3 className="statistics-title">{title}</h3>
      {children}
    </Container>
  );
};
