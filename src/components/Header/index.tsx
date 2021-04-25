import React from 'react';
import { View } from 'react-native';

import userImg from '../../assets/waterdrop.png';

import { Container, Title, SubTitle, UserImg } from './styles';

interface HeaderProps {
  title: string;
  subTitle: string;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <Container>
      <View>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </View>
      <UserImg source={userImg} />
    </Container>
  );
};

export default Header;
