import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ComponentType<IconBaseProps>;
  iconColor?: string;
  iconSize?: number;
  variant?: 'primary' | 'secondary';
}
const Button: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconColor,
  iconSize,
  variant = 'primary',
  ...rest
}) => (
  <Container variant={variant} type="button" {...rest}>
    {Icon && <Icon size={iconSize || 22} color={iconColor} />}
    <span>{children}</span>
  </Container>
);

export default Button;
