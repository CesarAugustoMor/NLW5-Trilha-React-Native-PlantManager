import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Animated, View } from 'react-native';
import { RectButtonProps, Swipeable } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import colors from '../../styles/colors';

import {
  Container,
  Content,
  Details,
  Title,
  TimeLabel,
  Time,
  ButtonRemove,
} from './styles';

interface PlantCardSecondaryButtonProps extends RectButtonProps {
  data: {
    id: number;
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove(): void;
}

const PlantCardSecondary: React.FC<PlantCardSecondaryButtonProps> = ({
  data,
  handleRemove,
  ...rest
}) => {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  );
};

export default PlantCardSecondary;
