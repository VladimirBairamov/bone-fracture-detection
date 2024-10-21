import styled from "styled-components";
import { Color, colors } from "../../theme";

export const Container = styled.div`
  margin-top: 2rem;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  align-items: flex-end;
`;

export const Title = styled.div`
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 600;
`;

export const PagesInfo = styled.div`
  font-size: 2.25rem;
  line-height: 2.75rem;
  margin-bottom: 0.5rem;
`;

export const Grid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6.25rem;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background: radial-gradient(
        farthest-side,
        ${colors[Color.Yellow]} 94%,
        ${colors.white}
      )
      top/8px 8px no-repeat,
    conic-gradient(${colors.white}00 30%, ${colors[Color.Yellow]});
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - 1rem),
    ${colors.black} 0
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(100% - 1rem),
    ${colors.black} 0
  );
  animation: spin 1s infinite linear;

  @keyframes spin {
    100% {
      transform: translate(-50%, -50%) rotate(1turn);
    }
  }
`;
