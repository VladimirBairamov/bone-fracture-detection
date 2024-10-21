import { FilterWrapper } from "../FilterWrapper";
import { RangeSlider } from "../RangeSlider";
import { useFiltersContext } from "../../contexts/FiltersContext";

export const PolygonRangeFilter = () => {
  const {
    filters: { polygonRange },
    setPolygonRange,
  } = useFiltersContext();

  return (
    <FilterWrapper title="Polygon Range">
      <RangeSlider
        values={polygonRange}
        step={1}
        min={0}
        max={4}
        onChange={setPolygonRange}
      />
    </FilterWrapper>
  );
};
