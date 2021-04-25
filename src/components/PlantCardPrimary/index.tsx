import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';

interface EnvironmentButtonProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    photo: 'https://storage.googleapis.com/golden-wind/nextlevelweek/05-plantmanager/1.svg';
  };
}

import { Container, Content, Title } from './styles';

const PlantCardPrimary: React.FC<EnvironmentButtonProps> = ({
  data,
  ...rest
}) => {
  return (
    <Container
      colors={['#f5faf7', colors.shape]}
      start={{ x: 0.13, y: 0.36 }}
      locations={[0, 1]}
    >
      <Content {...rest}>
        <SvgFromUri width={80} height={89} uri={data.photo} />
        <Title>{data.name}</Title>
      </Content>
    </Container>
  );
};

export default PlantCardPrimary;
