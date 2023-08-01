import { useState } from 'react';
import cn from 'classnames';

import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ISortSelectProps } from './sort-select.type';

export default function SortSelect({
  title,
  items,
  defaultSelectTitle = 'Default sorting',
  onSelect,
  className,
}: ISortSelectProps) {
  const [personName, setPersonName] = useState<string[]>([]);

  const onHandleSortProducts = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    console.log(event.target);
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
    onSelect(value[0]);
  };

  return (
    <Box className={cn('sort-select', className)}>
      {title && (
        <Typography variant="body1" className="sort-select__title">
          {title}
        </Typography>
      )}
      <FormControl variant="standard">
        <Select displayEmpty value={personName} onChange={onHandleSortProducts}>
          <MenuItem disabled value="">
            {defaultSelectTitle}
          </MenuItem>
          {items.map((item) => (
            <MenuItem key={item.id} value={item.value}>
              {item.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
