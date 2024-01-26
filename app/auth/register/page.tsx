import Container from "@/app/components/Container";
import FormWrap from "@/app/components/productsFetcher/FormWrap";
import RegisterForm from "./RegisterForm";


const RegisterPage = () => {
  return (
    <Container>
      <FormWrap>
        <RegisterForm />
      </FormWrap>
    </Container> >
  );
};

export default RegisterPage;
