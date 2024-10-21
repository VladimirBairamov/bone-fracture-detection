import { useFiltersContext } from "../../contexts/FiltersContext";
import { ClassesFilter } from "../ClassesFilter";
import { PolygonRangeFilter } from "../PolygonRangeFilter";
import { ClearButton, Container, Footer, HelpButton, Logo } from "./styled";
import { TrashIcon } from "./TrashIcon";

export const Filters = () => {
  const { clearFilters } = useFiltersContext();

  return (
    <Container>
      <Logo />
      <ClassesFilter />
      <PolygonRangeFilter />
      <Footer>
        <ClearButton onClick={clearFilters}>
          <TrashIcon />
          Clear Filters
        </ClearButton>
        <HelpButton>Need help?</HelpButton>
      </Footer>
    </Container>
  );
};
