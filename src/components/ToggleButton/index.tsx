import { Color } from "../../theme";
import { Container, Dot, Label } from "./styled";

interface Props {
  label: string;
  checked?: boolean;
  color?: Color;
  onChange?: (checked: boolean) => void;
}

export const ToggleButton = ({
  label,
  checked = false,
  color = Color.Blue,
  onChange,
}: Props) => {
  const onClick = () => {
    onChange?.(!checked);
  };

  return (
    <Container $color={color} $active={checked} onClick={onClick}>
      <Dot $color={color} />
      <Label>{label}</Label>
    </Container>
  );
};
