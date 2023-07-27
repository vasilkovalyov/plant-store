import AuthForm from '@/components/AuthForm/auth-form';
import Container from '@/components/Container/container';

export default function Auth() {
  return (
    <section className="section-auth">
      <Container>
        <AuthForm />
      </Container>
    </section>
  );
}
