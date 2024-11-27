"use client" 
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
const HomePage = () => {
  
  useEffect(() => {
    document.title = 'Home Page';
  }, []);

  return (
    <div>
      HomePage
      <Button variant='destructive'>Submit</Button>
    </div>
  );
};
export default HomePage;
