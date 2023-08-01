'use client';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { IFilterRangeProps } from './filter-range.type';
import { targetCurrencySymbol } from '@/constants/common';

const minDistance = 0;
const maxDistance = 1000;

export default function FilterRange({ title }: IFilterRangeProps) {
  const [rangeValue, setrangeValue] = useState<number[]>([
    minDistance,
    maxDistance,
  ]);

  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setrangeValue([
        Math.min(newValue[0], rangeValue[1] - minDistance),
        rangeValue[1],
      ]);
    } else {
      setrangeValue([
        rangeValue[0],
        Math.max(newValue[1], rangeValue[0] + minDistance),
      ]);
    }
  };

  return (
    <Box className="filter-range">
      <Typography variant="h6" className="filter-range__title">
        {title}
      </Typography>
      <Box paddingX={1.5} marginBottom={1.5}>
        <Slider
          defaultValue={1}
          step={1}
          min={0}
          max={100}
          value={rangeValue}
          onChange={handleChange}
          valueLabelDisplay="auto"
          disableSwap
        />
      </Box>
      <Stack direction="row" spacing={1}>
        <Typography variant="body2">Price:</Typography>
        <Typography variant="body2" color="primary" fontWeight={700}>
          {targetCurrencySymbol}
          {rangeValue[0]} - {targetCurrencySymbol}
          {rangeValue[1]}
        </Typography>
      </Stack>
    </Box>
  );
}
