import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Icon from '@/components/Public/Icon/icon';
import AlertError from '@/components/AlertError/alert-error';
import { IconEnum } from '@/types/icons';

import LoginService, { IBaseLogin } from '@/services/login';
import LoginFormValidationSchema from './logn-form.valdation';

const loadingService = new LoginService();

export default function LoginForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IBaseLogin>({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormValidationSchema),
  });

  async function onSubmit(props: IBaseLogin) {
    try {
      setLoading(true);
      const response = await loadingService.baseLogin(props);
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage(e.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Box className="login-form">
      <Typography variant="body1" className="login-form__message">
        Enter your username and password to login.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom={2}>
          <InputLabel>Login</InputLabel>
          <TextField
            {...register('Email')}
            placeholder="Login"
            name="Email"
            type="email"
            variant="outlined"
            fullWidth
            error={!!errors.Email?.message}
            helperText={errors.Email?.message}
          />
        </Box>
        <Box marginBottom={2}>
          <InputLabel>Password</InputLabel>
          <TextField
            {...register('Password')}
            placeholder="Password"
            name="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Icon
                    size={20}
                    icon={true ? IconEnum.Eye : IconEnum.EyeCross}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputAdornment>
              ),
            }}
            error={!!errors.Password?.message}
            helperText={errors.Password?.message}
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          disabled={loading}
        >
          Login
        </Button>
        <AlertError
          message={errorMessage}
          onHandleClose={() => setErrorMessage(null)}
        />
      </form>
    </Box>
  );
}
