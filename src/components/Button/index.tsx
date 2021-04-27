import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  style,
  isDisabled = false,
  ...rest
}) => {
  return (
    <Container
      style={style}
      isDisabled={isDisabled}
      onPress={onPress}
      {...rest}
    >
      <Text>{children}</Text>
    </Container>
  );
};

export default Button;
