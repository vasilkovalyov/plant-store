import cn from 'classnames';
import Icon from '../Icon/icon';
import { ISocialListProps } from './social-media.type';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function SocialList({
  title,
  items,
  className,
}: ISocialListProps) {
  return (
    <Box className={cn('social-media', className)}>
      {title && (
        <Typography variant="h6" className="social-media__title">
          {title}
        </Typography>
      )}
      <Stack
        component="ul"
        direction="row"
        gap={0.75}
        className="social-media__list"
      >
        {items.map((item) => (
          <Box
            component="li"
            key={item.id}
            width={32}
            height={32}
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginBottom={1.2}
            className="social-media__item"
          >
            <a href="#" className="social-media__link">
              <Icon icon={item.icon} className="social-media__icon" />
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
