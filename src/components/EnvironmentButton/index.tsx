import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

import { Container, Content, Title } from './styles';

interface EnvironmentButtonProps extends RectButtonProps {
  isActive?: boolean;
}

const EnvironmentButton: React.FC<EnvironmentButtonProps> = ({
  isActive = false,
  children,
  ...rest
}) => {
  return isActive ? (
    <Content isActive={isActive} {...rest}>
      <Title isActive={isActive}>{children}</Title>
    </Content>
  ) : (
    <Container
      colors={['#f5faf7', colors.shape]}
      start={{ x: 0.13, y: 0.36 }}
      locations={[0, 1]}
    >
      <Content isActive={isActive} {...rest}>
        <Title isActive={isActive}>{children}</Title>
      </Content>
    </Container>
  );
};

export default EnvironmentButton;
