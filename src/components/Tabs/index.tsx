import { Container, Tab } from "./styled";

type Tab = {
  value: string;
  label: string;
};

interface Props {
  tabs: Tab[];
  selected?: string;
  onSelect?: (tab: string) => void;
}

export const Tabs = ({ tabs, selected, onSelect }: Props) => (
  <Container>
    {tabs.map((tab) => (
      <Tab
        key={tab.value}
        onClick={() => onSelect?.(tab.value)}
        $active={tab.value === selected}
      >
        {tab.label}
      </Tab>
    ))}
  </Container>
);
