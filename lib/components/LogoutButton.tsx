"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/lib/ui/button";
import { logout } from "@/lib/data/auth";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <Button onClick={handleLogout} variant="outline" className="flex items-center gap-2 w-full h-12 text-base">
      <LogOut />
      Logout
    </Button>
  );
}
