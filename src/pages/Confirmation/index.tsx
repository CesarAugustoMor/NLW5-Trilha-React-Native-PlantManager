import React from 'react';
import Button from '../../components/Button';

import { Container, Content, Emoji, SubTitle, Title, Footer } from './styles';

const Confirmation: React.FC = () => {
  return (
    <Container>
      <Content>
        <Emoji> 😊 </Emoji>
        <Title>Prontinho</Title>
        <SubTitle>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado.
        </SubTitle>
        <Footer>
          <Button>Começar</Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default Confirmation;
