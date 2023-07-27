import Button from '../Button/button';
import { ICtaFormProps } from './cta-form.type';

export default function CtaForm({ title, text }: ICtaFormProps) {
  return (
    <div className="cta-form">
      <h6 className="cta-form__title">{title}</h6>
      <form>
        <div className="cta-field">
          <input
            type="email"
            placeholder="enter your email address..."
            className="cta-field__input"
          />
          <Button
            variant="contained"
            color="primary"
            className="cta-field__button"
          >
            Join
          </Button>
        </div>
      </form>
      {text && <p className="cta-form__text">{text}</p>}
    </div>
  );
}
