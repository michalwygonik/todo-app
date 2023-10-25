import Image from "next/image";
import { Poppins } from "next/font/google";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image src="/logo.png" height="40" width="40" alt="Logo" />
    </div>
  );
};
