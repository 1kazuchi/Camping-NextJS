"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast"


const SignOut = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      description: "Logged Out",
    });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button className = "w-full text-left" onClick={handleLogout}>Sign Out</button>
    </SignOutButton>
  );
};
export default SignOut;
