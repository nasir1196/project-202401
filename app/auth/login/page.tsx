import Container from "@/app/components/Container";
import FormWrap from "@/app/components/productsFetcher/FormWrap";
import LoginForm from "./LoginForm";


const LoginPage = () => {
  return (
    <Container>
      <FormWrap>
        <LoginForm />
      </FormWrap>
    </Container>
  );
};

export default LoginPage;
