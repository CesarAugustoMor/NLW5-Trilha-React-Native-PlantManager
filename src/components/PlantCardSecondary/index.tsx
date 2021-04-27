import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';

import { Container, Content, Details, Title, TimeLabel, Time } from './styles';

interface PlantCardSecondaryButtonProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    photo: string;
    hour: string;
  };
}

const PlantCardSecondary: React.FC<PlantCardSecondaryButtonProps> = ({
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
        <SvgFromUri width={45} height={45} uri={data.photo} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Regar às</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </Content>
    </Container>
  );
};

export default PlantCardSecondary;
