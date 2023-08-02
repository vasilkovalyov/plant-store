import Image from 'next/image';
import { IService } from './service.type';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Service({ image, text, title }: IService) {
  return (
    <Box className="service">
      <Box
        className="service__image"
        marginBottom={1.25}
        maxWidth={80}
        width="100%"
        minHeight="100px"
      >
        <Image src={image.url} alt={image.alt} width={150} height={34} />
      </Box>
      <Typography variant="h6" marginBottom={0.5}>
        {title}
      </Typography>
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
}
