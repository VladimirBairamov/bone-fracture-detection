import styled from "styled-components";
import { colors } from "../../theme";

export const ClassesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const TextButton = styled.span<{ $disabled: boolean }>`
  display: inline-block;
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-bottom: 1.5rem;
  margin-right: 2rem;
  color: ${colors.textBlue};
  cursor: pointer;

  &:hover {
    color: ${colors.textBlueHover};
  }

  ${({ $disabled }) => $disabled && `
    color: ${colors.grey};
    pointer-events: none;
  `}
`;