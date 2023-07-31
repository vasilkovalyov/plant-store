import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { ICtaFormProps } from './cta-form.type';

export default function CtaForm({ title, text }: ICtaFormProps) {
  return (
    <Box className="cta-form">
      {title && (
        <Typography variant="h6" className="cta-form__title">
          {title}
        </Typography>
      )}
      <form>
        <Box className="cta-field">
          <TextField
            type="email"
            placeholder="enter your email address..."
            className="cta-field__input"
            variant="outlined"
            fullWidth
          />
          <Button
            variant="contained"
            color="primary"
            className="cta-field__button"
            size="small"
          >
            Join
          </Button>
        </Box>
      </form>
      {text && (
        <Typography variant="body1" className="cta-form__text">
          {text}
        </Typography>
      )}
    </Box>
  );
}
