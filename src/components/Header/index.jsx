import React from 'react';
import { Container, Title } from './styles';

export default function Header() {

  const userName = localStorage.getItem('name');

  return (
    <Container>
      
      <Title>
        <h1>Olá {userName}</h1>
        <h4>Seja bem à sua manutenção de Lead</h4>
      </Title>

    </Container>
  )
}
