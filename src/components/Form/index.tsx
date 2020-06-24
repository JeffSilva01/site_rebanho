import React from 'react';

import { Container } from './styles';

const Form: React.FC = () => {
  return (
    <Container>
      <h1>Fale conosco</h1>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="E-mail" />
      <input type="text" placeholder="Whatsapp" />
      <textarea placeholder="Escreva sua mensagem" />
      <button type="submit">Enviar</button>
    </Container>
  );
};

export default Form;
