import { styled } from "styled-components";
import { colors, Color } from "../../theme";

export const Container = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.grey};
  box-sizing: border-box;
`;

export const Tab = styled.div<{ $active: boolean }>`
  font-size: 1.75rem;
  padding: 0.5rem 2rem;
  margin-bottom: -1px;
  color: ${colors.text};
  cursor: pointer;
  transition-duration: .2s;
  border-bottom: 1px solid transparent;

  ${({ $active }) => $active && `
    color: ${colors.textYellow};
    border-bottom: 1px solid ${colors[Color.Yellow]};
    background-color: ${colors[Color.Yellow]}1a;
  `}

  &:hover {
    background-color: ${colors[Color.Yellow]}33;
    color: ${colors.textYellow};
    border-bottom: 1px solid ${colors[Color.Yellow]};
  }
`;
