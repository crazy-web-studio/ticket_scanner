"use client";
import logoLight from "@/lib/assets/illuzion-logo-light-mode.png";
import logoDark from "@/lib/assets/illuzion-logo-dark-mode.png";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function BusinessLogo() {
  const { theme } = useTheme();

  return (
    <div>
      <Image src={theme === "dark" ? logoDark : logoLight} alt="Illusion Logo" width={130} height={100} />
    </div>
  );
}
