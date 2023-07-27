import Button from '../Button/button';
import Input from '../Forms/Input/input';
import Password from '../Forms/Password/password';

export default function RegisterForm() {
  return (
    <div className="login-form">
      <p className="login-form__message">
        Enter your email and password to register.
      </p>
      <form>
        <Input
          label="Username"
          name="username"
          placeholder="Enter your username address"
        />
        <Input
          label="Email"
          name="email"
          placeholder="Enter your email address"
          type="email"
        />
        <Password label="Password" name="password" placeholder="Password" />
        <Password
          label="Confirm password"
          name="password"
          placeholder="Confirm password"
        />
        <Button fullwidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
