import styled from "styled-components";
import { Color, colors } from "../../theme";

export const LabelsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Label = styled.div`
  font-size: 1.5rem;
  line-height: 1.75rem;
`;

export const SliderWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  position: relative;
  height: 1.5rem;
`;

export const Step = styled.div<{ $active: boolean }>`
  flex: 1;
  height: 0.375rem;
  border: 1px solid ${colors[Color.Yellow]};
  border-radius: 0.5rem;
  background: ${colors.white};

  ${({ $active }) => $active && `
    background: ${colors[Color.Yellow]};
  `}
`;

export const SliderKnob = styled.div<{ $stepsLength: number, $value: number}>`
  cursor: grab;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${colors.white};
  border: 0.75rem solid ${colors[Color.Yellow]};
  position: absolute;
  left: ${({ $stepsLength, $value }) => `calc(${100 * $value / $stepsLength}% - 1.25rem)`};
`;
  
