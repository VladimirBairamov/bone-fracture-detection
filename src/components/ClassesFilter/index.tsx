import { CLASSES } from "../../theme";
import { FilterWrapper } from "../FilterWrapper";
import { ToggleButton } from "../ToggleButton";
import { ClassesWrapper, TextButton } from "./styled";
import { allClasses, useFiltersContext } from "../../contexts/FiltersContext";

export const ClassesFilter = () => {
  const {
    setClasses,
    filters: { classes },
  } = useFiltersContext();
  const isAllSelected = classes.length === CLASSES.length;
  const isNoneSelected = classes.length === 0;

  const handleClassChange = (id: number, checked: boolean) =>
    setClasses(
      checked ? [...classes, id] : classes.filter((selected) => selected !== id)
    );

  const selectAll = () => setClasses(allClasses);

  const deselectAll = () => setClasses([]);

  return (
    <FilterWrapper title="Classes filter">
      <TextButton $disabled={isAllSelected} onClick={selectAll}>
        Select all
      </TextButton>
      <TextButton $disabled={isNoneSelected} onClick={deselectAll}>
        Deselect all
      </TextButton>
      <ClassesWrapper>
        {CLASSES.map(({ label, color, id }) => (
          <ToggleButton
            key={label}
            label={label}
            color={color}
            checked={classes.includes(id)}
            onChange={(checked) => handleClassChange(id, checked)}
          />
        ))}
      </ClassesWrapper>
    </FilterWrapper>
  );
};
