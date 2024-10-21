import styled from "styled-components";
import { Color, colors } from "../../theme";

export const Container = styled.div<{ $color: Color, $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem; 
  gap: 1.25rem;
  cursor: pointer;
  border-radius: 2rem;
  border: 1px solid ${({ $color }) => colors[$color]};
  transition-duration: .2s;

  ${({ $active, $color }) => $active && `
    background-color: ${colors[$color]}33;
  `}

  &:hover {
    // 33 is 20% opacity in hex
    background-color: ${({ $color }) => colors[$color]}33;
    border-color: transparent;
  }
`;

export const Dot = styled.div<{ $color: Color }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ $color }) => colors[$color]};
`;

export const Label = styled.div`
  font-size: 1.5rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: ${colors.text};
`;
