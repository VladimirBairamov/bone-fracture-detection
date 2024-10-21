import styled from "styled-components";
import { colors } from "../../theme";

export const Container = styled.div`
  overflow: hidden;
  cursor: pointer;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  overflow: hidden;
  background-color: ${colors.black};
`;

export const Title = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
