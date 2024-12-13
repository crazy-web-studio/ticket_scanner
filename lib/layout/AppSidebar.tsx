"use client";
import Link from "next/link";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/lib/ui/sidebar";
import { Separator } from "@/lib/ui/separator";
import LogoutButton from "../components/LogoutButton";
import { List, ScanLine } from "lucide-react";
import ThemeButton from "@/lib/components/ThemeButton";
import { useSidebar } from "@/lib/ui/sidebar";

export default function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-5">
        <h2>Ticket Scanner</h2>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <Separator />
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton asChild>
              <Link href="/dashboard" className="flex items-center gap-2" onClick={() => toggleSidebar()}>
                <List />
                <span>List of Tickets</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator />
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton asChild>
              <Link href="/dashboard/scan" className="flex items-center gap-2" onClick={() => toggleSidebar()}>
                <ScanLine />
                <span>Scann Ticket</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator />
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <ThemeButton />
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <LogoutButton />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
