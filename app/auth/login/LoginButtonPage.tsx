"use client";

import { useRouter } from "next/navigation";


interface LoginButtonPageProps {
  children: React.ReactNode,
  mode?: "modal" | "redirect";
  asChild?: boolean,
}

const LoginButtonPage = ({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonPageProps) => {
  const  router = useRouter()
  const onClick = () => {
    router.push("/auth/register")
  };

  if(mode==="modal"){
    return(
      <span>TODO: Implement Modal</span>
    )
  }
  return <span onClick={onClick} className="cursor-pointer">{children}</span>;
};

export default LoginButtonPage;