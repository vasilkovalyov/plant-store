'use client';
import { useState } from 'react';
import cn from 'classnames';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import LoginForm from '../LoginForm/login-form';
import RegisterForm from '../RegisterForm/register-form';

type FormType = 'login' | 'register';

export default function AuthForm() {
  const [formVariant, setFormVariant] = useState<FormType>('login');

  function toggleForm(type: FormType) {
    setFormVariant(type);
  }

  return (
    <Box className="auth-form">
      <Box className="auth-form__toggle-box">
        <Button
          variant="text"
          size="small"
          className={cn('auth-form__toggle-form-button', {
            active: formVariant === 'login',
          })}
          onClick={() => toggleForm('login')}
        >
          Login
        </Button>
        <Button
          variant="text"
          size="small"
          className={cn('auth-form__toggle-form-button', {
            active: formVariant === 'register',
          })}
          onClick={() => toggleForm('register')}
        >
          Register
        </Button>
      </Box>
      {formVariant === 'login' ? <LoginForm /> : null}
      {formVariant === 'register' ? <RegisterForm /> : null}
    </Box>
  );
}
