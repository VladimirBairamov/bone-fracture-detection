import styled from "styled-components";
import { colors, pxToRem } from "../../theme";

export const BackDrop = styled.div`
  position: fixed;
  background-color: ${colors.backDrop};
  backdrop-filter: blur(1rem);
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1000;
  overflow-x: auto;
`;

export const Modal = styled.div`
  background-color: ${colors.white};
  border-radius: 1.25rem;
  border: 1px solid ${colors.grey};
  margin: ${pxToRem(142)} auto;
  position: relative;
  width: ${pxToRem(520)};
  padding: 2.5rem 4.5rem 4.5rem;
`;

export const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.div`
  font-size: 1.75rem;
  line-height: 2.25rem;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  min-width: ${pxToRem(38)};
  height: ${pxToRem(38)};
  background-color: ${colors.white};
  border-radius: 50%;
  transition-duration: 0.2s;
  position: relative;

  &:hover {
    background-color: ${colors.lightGrey};
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    background-color: ${colors.grey};
    width: 2.5rem;
    height: 0.25rem;
    transform: rotate(45deg);
    left: 1.125rem;
    top: 2.25rem;
  }

  &::before {
    transform: rotate(-45deg);
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 2.5rem;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 2rem;
`;

export const ChipsList = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
`;
