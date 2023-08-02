import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import { IFilterCategoryProps } from './filter-category.type';

export default function FilterCategory({ title, items }: IFilterCategoryProps) {
  return (
    <Box className="filter-category">
      <Typography variant="h6" className="filter-category__title">
        {title}
      </Typography>
      <List className="filter-category__list">
        {items.map((item) => (
          <ListItem key={item.id} className="filter-category__list-item">
            <FormControlLabel control={<Checkbox />} label={item.title} />
            <Typography className="filter-category__list-item-count">
              ({item.count})
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
