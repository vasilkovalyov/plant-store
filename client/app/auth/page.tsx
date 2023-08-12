import AuthForms from '@/components/Public/Auth/auth';
import Container from '@mui/material/Container';

export default function Auth() {
  return (
    <section className="section-auth">
      <Container>
        <AuthForms />
      </Container>
    </section>
  );
}
