"use client";

import { useRouter } from "next/navigation";

interface RegisterButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

const RegisterButtonPage = ({
  children,
  mode,
  asChild,
}: RegisterButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement Modal</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

export default RegisterButtonPage;
