import { Color } from "../../theme";
import { Container } from "./styled";

type Props = {
  color: Color;
  label: string;
};

export const Chip = ({ color, label }: Props) => (
  <Container $color={color}>{label}</Container>
);
