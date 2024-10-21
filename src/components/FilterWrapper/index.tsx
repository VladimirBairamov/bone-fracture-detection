import { Container, Title } from "./styled";

interface Props {
  children?: React.ReactNode;
  title: string;
}

export const FilterWrapper = ({ title, children }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};
