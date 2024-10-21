import { useMemo } from "react";
import { NextIcon } from "./NextIcon";
import { PrevIcon } from "./PrevIcon";
import { Button, ButtonsGroup, Container, LightButton } from "./styled";

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({ page, totalPages, onPageChange }: Props) => {
  const buttonGroups = useMemo(() => {
    const buttons = [
      0,
      1,
      2,
      page - 1,
      page,
      page + 1,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
    ];

    const filteredButtons = buttons.sort().reduce<number[]>((acc, current) => {
      if (acc.includes(current)) return acc;

      if (acc.length > 0 && current - acc[acc.length - 1] > 1) {
        acc.push(-1);
      }

      if (current >= 0 && current < totalPages) {
        acc.push(current);
      }
      return acc;
    }, []);

    const groups = filteredButtons.reduce<number[][]>(
      (acc, current) => {
        if (current === -1) {
          acc.push([]);
        } else {
          acc[acc.length - 1].push(current);
        }
        return acc;
      },
      [[]]
    );

    return groups;
  }, [page, totalPages]);

  return (
    <Container>
      <LightButton
        onClick={() => onPageChange(page - 1)}
        $disabled={page === 0}
      >
        <PrevIcon />
      </LightButton>

      {buttonGroups.map((buttons, i) => (
        <>
          <ButtonsGroup>
            {buttons.map((i) => (
              <Button
                key={i}
                onClick={() => onPageChange(i)}
                $active={page === i}
              >
                {i + 1}
              </Button>
            ))}
          </ButtonsGroup>
          {i < buttonGroups.length - 1 && (
            <ButtonsGroup>
              <Button>...</Button>
            </ButtonsGroup>
          )}
        </>
      ))}

      <LightButton
        onClick={() => onPageChange(page + 1)}
        $disabled={page === totalPages - 1}
      >
        <NextIcon />
      </LightButton>
    </Container>
  );
};
