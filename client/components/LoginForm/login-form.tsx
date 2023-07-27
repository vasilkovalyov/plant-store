import Button from '../Button/button';
import Input from '../Forms/Input/input';
import Password from '../Forms/Password/password';

export default function LoginForm() {
  return (
    <div className="login-form">
      <p className="login-form__message">
        Enter your username and password to login.
      </p>
      <form>
        <Input label="Login" placeholder="Login" name="login" />
        <Password label="Password" placeholder="Password" name="password" />
        <Button fullwidth variant="contained" color="primary">
          Login
        </Button>
      </form>
    </div>
  );
}
