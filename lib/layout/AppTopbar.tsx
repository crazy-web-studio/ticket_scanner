import React from "react";
import { SidebarTrigger } from "@/lib/ui/sidebar";
import { Button } from "../ui/button";
import { Link, ScanLine } from "lucide-react";

export default function AppTopbar() {
  return (
    <div className="flex items-center justify-between p-5 border-b border-border ">
      <Button variant="outline" size="auto">
        <SidebarTrigger className="!size-6" />
      </Button>

      <Button variant="outline" size="auto">
        <Link href="/dashboard/scann">
          <ScanLine className="!size-6" />
        </Link>
      </Button>
    </div>
  );
}
