import { Button } from "@/components/ui/button";
import LoginButtonPage from "./LoginButtonPage";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center h-full justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div>Login page</div>
      <div className="space-y-6 text-center">
        <LoginButtonPage>
          <Button variant="buttonGreen" size="lg">
            Register
          </Button>
        </LoginButtonPage>
      </div>
    </div>
  );
};

export default LoginPage;
