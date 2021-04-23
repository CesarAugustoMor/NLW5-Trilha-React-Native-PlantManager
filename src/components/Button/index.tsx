import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

const Button: React.FC<TouchableOpacityProps> = ({
  onPress,
  children,
  style,
  ...rest
}) => {
  return (
    <Container onPress={onPress} {...rest}>
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
