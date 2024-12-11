"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/lib/ui/button";
import { logout } from "@/lib/data/auth";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Button onClick={handleLogout} variant="outline">
      Logout
    </Button>
  );
}
