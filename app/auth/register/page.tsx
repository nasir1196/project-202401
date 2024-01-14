import { Button } from "@/components/ui/button";
import RegisterButtonPage from "./RegisterButtonPage";

const RegisterPage = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div>Register page</div>
      <div className="space-y-6 text-center">
        <RegisterButtonPage>
          <Button variant="buttonGreen" size="lg">
            Sign In
          </Button>
        </RegisterButtonPage>
      </div>
    </div>
  );
};

export default RegisterPage;
