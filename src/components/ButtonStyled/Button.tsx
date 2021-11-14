import React, { useContext, useMemo } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'default' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  to?: string;
  text?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  disabled = false,
  size = 'md',
  onClick,
  to = '',
  text = '',
  href = '',
}) => {
  const theme = useContext(ThemeContext);

  let boxShadow: string;
  let buttonSize: number;
  let buttonPadding: number;
  let fontSize: number;
  switch (size) {
    case 'sm':
      boxShadow = `4px 4px 8px ${theme.secondary1},
        -8px -8px 16px ${theme.shadow1}FF;`;
      buttonPadding = theme.grids.sm;
      buttonSize = 36;
      fontSize = 14;
      break;
    case 'lg':
      boxShadow = `6px 6px 12px ${theme.secondary1},
        -12px -12px 24px ${theme.shadow1};`;
      buttonPadding = theme.grids.lg;
      buttonSize = 72;
      fontSize = 16;
      break;
    case 'md':
    default:
      boxShadow = `6px 6px 12px ${theme.secondary1},
        -12px -12px 24px -2px ${theme.shadow1};`;
      buttonPadding = theme.grids.lg;
      buttonSize = 56;
      fontSize = 16;
  }

  let buttonText: string;
  let buttonBackground: string;
  switch (variant) {
    case 'secondary':
      buttonText = theme.text1;
      buttonBackground = theme.bg1;
      break;
    case 'tertiary':
      buttonText = theme.text2;
      buttonBackground = theme.bg2;
      break;
    default:
      buttonText = theme.text3;
      buttonBackground = theme.bg3;
  }

  const ButtonChild = useMemo(() => {
    if (to) {
      return <StyledLink to={to}>{text}</StyledLink>;
    }
    if (href) {
      return (
        <StyledExternalLink href={href} target="__blank">
          {text}
        </StyledExternalLink>
      );
    }
    return text;
  }, [href, text, to]);
  return (
    <>
      <StyledButton
        disabled={disabled}
        color={buttonText}
        background={buttonBackground}
        boxShadow={boxShadow}
        padding={buttonPadding}
        fontSize={fontSize}
        size={buttonSize}
        onClick={onClick}
      >
        {children}
        {ButtonChild}
      </StyledButton>
    </>
  );
};

interface StyledButtonProps {
  color: string;
  background: string;
  disabled?: boolean;
  boxShadow: string;
  padding: number;
  fontSize: number;
  size: number;
  theme: any;
}

const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (!props.disabled ? props.color : `${props.color}`)};
  background: ${(props) => (!props.disabled ? props.background : `${props.background}`)};
  box-shadow: ${(props) => props.boxShadow};

  font-size: ${(props) => props.fontSize}px;
  font-weight: 700;

  height: ${(props) => props.size}px;
  width: 100%;
  border: 2px solid ${(props) => props.color};
  border-radius: 3px;

  padding-left: ${(props) => props.padding}px;
  padding-right: ${(props) => props.padding}px;

  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.shadow1};
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 56px;
  flex: 1;
  margin: 0 ${(props) => -props.theme.grids.md}px;
  padding: 0 ${(props) => props.theme.grids.md}px;
  text-decoration: none;
`;

const StyledExternalLink = styled.a`
  align-items: center;
  color: inherit;
  display: flex;
  height: 56px;
  flex: 1;
  justify-content: center;
  margin: 0 ${(props) => -props.theme.grids.md}px;
  padding: 0 ${(props) => props.theme.grids.md}px;
  text-decoration: none;
`;

export default Button;
