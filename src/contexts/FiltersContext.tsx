import { createContext, useContext, useMemo, useState } from "react";
import { Range } from "../components/RangeSlider";
import { CLASSES } from "../theme";

type Props = {
  children: React.ReactNode;
};

type Filters = {
  classes: number[];
  polygonRange: Range;
};

type ContextType = {
  filters: Filters;
  setClasses: (classes: number[]) => void;
  setPolygonRange: (polygonRange: Range) => void;
  clearFilters: () => void;
};

export const allClasses = CLASSES.map(({ id }) => id);
const defaultFilters: Filters = {
  classes: allClasses,
  polygonRange: { from: 0, to: 4 },
};

const Context = createContext<ContextType>({
  filters: defaultFilters,
  setClasses: () => {},
  setPolygonRange: () => {},
  clearFilters: () => {},
});

export const useFiltersContext = () => useContext(Context);

export const FilterProvider = ({ children }: Props) => {
  const [filters, setFilters] = useState(defaultFilters);

  const setClasses = (classes: number[]) => {
    setFilters((prev) => ({ ...prev, classes }));
  };

  const setPolygonRange = (polygonRange: Range) => {
    setFilters((prev) => ({ ...prev, polygonRange }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
  };

  const contextValue = useMemo(
    () => ({
      filters,
      setClasses,
      setPolygonRange,
      clearFilters,
    }),
    [filters.classes.length, filters.polygonRange.from, filters.polygonRange.to]
  );

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
