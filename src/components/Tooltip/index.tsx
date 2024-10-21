import { useMemo, useRef, useState } from "react";
import { Container, Label } from "./styled";
import ReactDOM from "react-dom";

type Props = {
  label: string;
  children: React.ReactNode;
};

const tooltipContainer = document.getElementById("tooltipContainer")!;

export const Tooltip = ({ label, children }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementContainer = useRef<HTMLDivElement>(null);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  const labelStyle = useMemo(
    () => ({
      top: elementContainer.current
        ? elementContainer.current.getBoundingClientRect().bottom + 8
        : 0,
      left: elementContainer.current
        ? elementContainer.current.getBoundingClientRect().left +
          elementContainer.current.offsetWidth / 2
        : 0,
    }),
    [elementContainer.current]
  );

  return (
    <Container
      ref={elementContainer}
      onMouseEnter={() => showTooltip()}
      onMouseLeave={() => hideTooltip()}
    >
      {children}
      {isVisible &&
        ReactDOM.createPortal(
          <Label style={labelStyle}>{label}</Label>,
          tooltipContainer
        )}
    </Container>
  );
};
