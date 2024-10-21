import styled from "styled-components";
import { Color, colors } from "../../theme";

export const Container = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  align-items: center;
`;

export const LightButton = styled.div<{ $disabled: boolean }>`
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  line-height: 1;
  cursor: pointer;
  transition-duration: 0.2s;
  color: ${colors.grey};

  &:hover {
    color: ${colors.textBlue};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
    color: ${colors.grey}66; 
    pointer-events: none;
  `}
`;

export const Button = styled.div<{ $active?: boolean }>`
  background-color: transparent;
  width: 3.75rem;
  height: 3.75rem;
  text-align: center;
  line-height: 3.75rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grey}33;
    color: ${colors.text};
  }

  ${({ $active }) =>
    $active &&
    `
    background-color: ${colors[Color.Yellow]};
    color: ${colors.white};
  `}
`;

export const ButtonsGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${colors.grey}33;
  border-radius: 3.75rem;
`;
