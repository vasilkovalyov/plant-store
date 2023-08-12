'use client';
import { useState } from 'react';
import cn from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import LoginForm from '../../AuthForms/LoginForm/login-form';
import RegistrationForm from '../../AuthForms/RegistrationForm/registration-form';

type FormType = 'login' | 'register';

export default function Auth() {
  const [formVariant, setFormVariant] = useState<FormType>('login');

  function toggleForm(type: FormType) {
    setFormVariant(type);
  }

  return (
    <Box className="auth">
      <Box className="auth__toggle-box">
        <Button
          variant="text"
          size="small"
          className={cn('auth__toggle-form-button', {
            active: formVariant === 'login',
          })}
          color="inherit"
          onClick={() => toggleForm('login')}
        >
          Login
        </Button>
        <Button
          variant="text"
          size="small"
          className={cn('auth__toggle-form-button', {
            active: formVariant === 'register',
          })}
          color="inherit"
          onClick={() => toggleForm('register')}
        >
          Registration
        </Button>
      </Box>
      {}
      <Box
        className={cn('auth__form-wrapper', {
          active: formVariant === 'login',
        })}
      >
        <LoginForm />
      </Box>
      <Box
        className={cn('auth__form-wrapper', {
          active: formVariant === 'register',
        })}
      >
        <RegistrationForm />
      </Box>
    </Box>
  );
}
