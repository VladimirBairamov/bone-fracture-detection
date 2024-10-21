import styled from "styled-components";
import { Color, colors } from "../../theme";

export const Container = styled.div<{ $color: Color }>`
  background-color: ${({ $color }) => colors[$color]};
  border-radius: 1rem;
  color: ${colors.black};
  display: inline-block;
  font-size: 1.25rem;
  line-height: 1.5rem;
  padding: 0.5rem 3rem;
`;
