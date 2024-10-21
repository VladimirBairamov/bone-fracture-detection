import styled from "styled-components";
import { Color, colors, pxToRem } from "../../theme";

export const Container = styled.div`
  border: 1px solid ${colors.grey};
  border-radius: 1.25rem;
  padding: 2.5rem 3rem;
`;

export const Logo = styled.div`
  background-image: url("/images/logo.png");
  background-size: contain;
  width: ${pxToRem(242)};
  height: ${pxToRem(65)};
  margin-bottom: 5.5rem;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ClearButton = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    color: ${colors[Color.Blue]};
  }
`;

export const HelpButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: ${colors.black}80;
`;
