import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';

import Icon from '@/components/Public/Icon/icon';
import { IconEnum } from '@/types/icons';

export default function LoginForm() {
  return (
    <Box className="login-form">
      <Typography variant="body1" className="login-form__message">
        Enter your username and password to login.
      </Typography>
      <form>
        <Box marginBottom={2}>
          <InputLabel>Login</InputLabel>
          <TextField
            placeholder="Login"
            name="login"
            type="email"
            variant="outlined"
            fullWidth
          />
        </Box>
        <Box marginBottom={2}>
          <InputLabel>Password</InputLabel>
          <TextField
            placeholder="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon
                    size={20}
                    icon={true ? IconEnum.Eye : IconEnum.EyeCross}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Button fullWidth size="large" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Box>
  );
}
