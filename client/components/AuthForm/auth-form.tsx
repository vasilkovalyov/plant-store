'use client';
import { useState } from 'react';
import cn from 'classnames';
import LoginForm from '../LoginForm/login-form';
import RegisterForm from '../RegisterForm/register-form';
import Button from '../Button/button';

type FormType = 'login' | 'register';

export default function AuthForm() {
  const [formVariant, setFormVariant] = useState<FormType>('login');

  function toggleForm(type: FormType) {
    setFormVariant(type);
  }

  return (
    <div className="auth-form">
      <div className="auth-form__toggle-box">
        <Button
          variant="text"
          className={cn('auth-form__toggle-form-button', {
            active: formVariant === 'login',
          })}
          onClick={() => toggleForm('login')}
        >
          Login
        </Button>
        <Button
          variant="text"
          className={cn('auth-form__toggle-form-button', {
            active: formVariant === 'register',
          })}
          onClick={() => toggleForm('register')}
        >
          Register
        </Button>
      </div>
      <div hidden={formVariant !== 'login'}>
        <LoginForm />
      </div>
      <div hidden={formVariant !== 'register'}>
        <RegisterForm />
      </div>
    </div>
  );
}
