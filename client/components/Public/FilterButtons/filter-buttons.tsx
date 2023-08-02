import { useState } from 'react';
import cn from 'classnames';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { IFilterButtonsProps } from './filter-buttons.type';

export default function FilterButtons({
  items,
  onSelect,
  className,
}: IFilterButtonsProps) {
  const [value, setValue] = useState<string>(items[0].value);
  return (
    <Stack
      direction="row"
      spacing={0}
      className={cn('filter-buttons', className)}
    >
      {items.map((item) => (
        <Button
          key={item.id}
          variant="text"
          size="small"
          className={cn('filter-buttons__button', {
            active: value === item.value,
          })}
          onClick={() => {
            setValue(item.value);
            onSelect(item.value);
          }}
        >
          {item.title}
        </Button>
      ))}
    </Stack>
  );
}
