import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface ButtonProps extends RectButtonProps {
  title: string;
  color?: string;
}

export function Button({ title, color, ...rest }: ButtonProps) {
  const theme = useTheme();

  return (
    <Container {...rest} color={color ? color : theme.colors.main}>
      <Title>{ title }</Title>
    </Container>
  )
}