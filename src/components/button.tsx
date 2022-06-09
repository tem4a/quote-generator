import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as IconDice } from '../assets/icon-dice.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// ✅ This will work as intended
const animationStyles = css`
  animation: ${rotate} 2s linear infinite;
`;

const ButtonStyled = styled.button<{ loading: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 32px;
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.theme.colors.primary2};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s all cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    box-shadow: 0px 0px 40px #53ffaa;
  }

  &:active {
    transform: translateY(1px);
  }

  ${(props) => props.loading && animationStyles}
`;

const Button = ({ onClick, loading }: { onClick: () => void; loading: boolean }) => {
  return (
    <ButtonStyled onClick={onClick} loading={loading}>
      <IconDice />
    </ButtonStyled>
  );
};

export default Button;
