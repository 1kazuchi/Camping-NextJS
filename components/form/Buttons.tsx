"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Heart, LoaderCircle } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";

type SubmitProps = {
  className?: string;
  size?: btnsize;
  text?: string;
};

type btnsize = "default" | "lg" | "sm";

export const SubmitButton = ({ className, size, text }: SubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      disabled={pending}
      className={`${className} capitalize`}
      type="submit"
      size={size}
    >
      {pending ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span>Please waiting...</span>
        </>
      ) : (
        <p>{text}</p>
      )}
    </Button>
  );
};

export const SignInCardButton = () => {
  return (
    <SignInButton mode="modal">
      <Button size="icon" variant="outline">
        <Heart />
      </Button>
    </SignInButton>
  );
};
