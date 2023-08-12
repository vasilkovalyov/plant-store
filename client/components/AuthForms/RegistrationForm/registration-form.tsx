import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AxiosError } from 'axios';

import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';

import Icon from '@/components/Public/Icon/icon';
import { IconEnum } from '@/types/icons';

import RegistrationService, {
  IUserBaseRegistration,
} from '@/services/registration';
import RegistrationFormValidationSchema from './registration-form.valdation';

const registrationService = new RegistrationService();

export default function RegisterForm() {
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IUserBaseRegistration>({
    mode: 'onSubmit',
    resolver: yupResolver(RegistrationFormValidationSchema),
  });

  async function onSubmit(props: IUserBaseRegistration) {
    try {
      setLoading(true);
      const response = await registrationService.baseRegistration(props);
    } catch (e) {
      if (e instanceof AxiosError) {
        setErrorMessage(e.response?.data.error);
      }
    } finally {
      setLoading(false);
    }
  }

  function closeAlert() {
    setErrorMessage(null);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMessage]);

  return (
    <Box className="login-form">
      <Typography variant="body1" className="login-form__message">
        Enter your email and password to register.
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box marginBottom={2}>
          <InputLabel>FirstName</InputLabel>
          <TextField
            {...register('FirstName')}
            placeholder="Enter your firstName address"
            name="FirstName"
            type="text"
            variant="outlined"
            fullWidth
            error={!!errors.FirstName?.message}
            helperText={errors.FirstName?.message}
          />
        </Box>
        <Box marginBottom={2}>
          <InputLabel>LastName</InputLabel>
          <TextField
            {...register('LastName')}
            placeholder="Enter your lastName address"
            name="LastName"
            type="text"
            variant="outlined"
            fullWidth
            error={!!errors.LastName?.message}
            helperText={errors.LastName?.message}
          />
        </Box>
        <Box marginBottom={2}>
          <InputLabel>Email</InputLabel>
          <TextField
            {...register('Email')}
            placeholder="Enter your email address"
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
          Registration
        </Button>
        {errorMessage !== null ? (
          <Box marginTop={2}>
            <Alert onClose={closeAlert} severity="error" sx={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          </Box>
        ) : null}
      </form>
    </Box>
  );
}
