import { styled } from "styled-components";
import { pxToRem } from "../theme";

export const Wrapper = styled.div`
  max-width: ${pxToRem(1440)};
  padding: 3rem 4rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: ${pxToRem(336)} 1fr;
  height: calc(100vh - 6rem);
  gap: 6rem;
`;
