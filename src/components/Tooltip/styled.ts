import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  position: relative;
`;

export const Label = styled.div`
  position: absolute;
  transform: translateX(-50%);
  background-color: ${colors.white};
  color: ${colors.black};
  font-size: 1.75rem;
  line-height: 2.25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 1.75rem;
  box-shadow: 0px 1px 4px 0px ${colors.black}40;
  line-break: anywhere;

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid ${colors.white};
    top: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    filter: drop-shadow(0px -3px 5px rgba(0, 0, 0, 0.75));
  }

  &::after {
    content: "";
    position: absolute;
    width: 2rem;
    height: 0.5rem;
    background-color: ${colors.white};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
