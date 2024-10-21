import { useCallback, useEffect, useRef, useState } from "react";
import {
  Label,
  LabelsWrapper,
  SliderKnob,
  SliderWrapper,
  Step,
} from "./styled";

export type Range = {
  from: number;
  to: number;
};

interface Props {
  values: Range;
  min: number;
  max: number;
  step: number;
  onChange: (value: Range) => void;
}

const clamp = (val: number, min: number, max: number) =>
  Math.min(Math.max(val, min), max);
const normalizeRange = (range: Range) =>
  range.from > range.to ? { from: range.to, to: range.from } : range;
// Knob width 2.5rem(20px), offset is half of the knob width on each side
const SLIDER_OFFSET = 10;

export const RangeSlider = ({ values, min, max, step, onChange }: Props) => {
  const [range, setRange] = useState(values);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const stepsLength = (max - min) / step;

  useEffect(() => {
    if (isDragging) return;

    onChange(normalizeRange(range));
  }, [isDragging]);

  useEffect(() => {
    setRange(values);
  }, [values]);

  const onMouseDown = useCallback(
    (event: React.MouseEvent<HTMLElement>, knob: "from" | "to") => {
      event.preventDefault();
      if (!sliderRef.current) return;
      setIsDragging(true);

      const slider = sliderRef.current;
      const thumb = event.currentTarget;
      const stepWidth = slider.offsetWidth / stepsLength;
      let selectedStep = range[knob];

      function onMouseMove(moveEvent: MouseEvent) {
        const knobPosition =
          moveEvent.clientX - slider.getBoundingClientRect().left;
        const currentStep = clamp(
          min,
          Math.round(knobPosition / stepWidth),
          max
        );
        const steppedKnobPosition = currentStep * stepWidth - SLIDER_OFFSET;

        thumb.style.left = steppedKnobPosition + "px";

        if (currentStep !== selectedStep) {
          selectedStep = currentStep;
          setRange((prevRange) => ({ ...prevRange, [knob]: currentStep }));
        }
      }

      function onMouseUp() {
        setIsDragging(false);
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [max, min, range, stepsLength]
  );

  return (
    <div>
      <LabelsWrapper>
        <Label>
          min <b>{min}</b>
        </Label>
        <Label>
          max <b>{max}</b>
        </Label>
      </LabelsWrapper>
      <SliderWrapper ref={sliderRef}>
        {Array.from({ length: stepsLength }).map((_, index) => (
          <Step
            key={index}
            $active={
              index >= Math.min(range.from, range.to) &&
              index < Math.max(range.from, range.to)
            }
          />
        ))}
        <SliderKnob
          key={`knob_from_${range.from}`}
          $stepsLength={stepsLength}
          $value={range.from}
          onMouseDown={(event) => onMouseDown(event, "from")}
        />
        <SliderKnob
          key={`knob_to_${range.to}`}
          $stepsLength={stepsLength}
          $value={range.to}
          onMouseDown={(event) => onMouseDown(event, "to")}
        />
      </SliderWrapper>
    </div>
  );
};
