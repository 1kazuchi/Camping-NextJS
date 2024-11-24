"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { LoaderCircle } from "lucide-react";

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
export default SubmitButton;
