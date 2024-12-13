"use client";
import { SidebarTrigger } from "@/lib/ui/sidebar";
import { Button } from "../ui/button";
import { ScanLine, List } from "lucide-react";
import Link from "next/link";

export default function AppTopbar() {
  return (
    <div className="flex items-center justify-between p-5 border-b border-border ">
      <SidebarTrigger className="!size-6" />
      <div className="flex gap-5">
        <Link href="/dashboard">
          <Button variant="outline" size="auto">
            <List className="!size-6" />
          </Button>
        </Link>
        <Link href="/dashboard/scan">
          <Button variant="outline" size="auto">
            <ScanLine className="!size-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
