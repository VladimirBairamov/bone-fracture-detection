import { useEffect } from "react";
import { Filters } from "../components/Filters";
import { Gallery } from "../components/Gallery";
import { FilterProvider } from "../contexts/FiltersContext";
import { Wrapper } from "./styled";

export const App = () => {
  useEffect(() => {
    alert("Time spent: 8 hours");
  }, []);

  return (
    <FilterProvider>
      <Wrapper>
        <Filters />
        <Gallery />
      </Wrapper>
    </FilterProvider>
  );
};
