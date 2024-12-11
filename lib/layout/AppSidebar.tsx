import Link from "next/link";
import { Sidebar, SidebarContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/lib/ui/sidebar";
import { Separator } from "@/lib/ui/separator";
import LogoutButton from "../components/LogoutButton";
import { List, ScanLine } from "lucide-react";

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-5">
        <Link href="/">
          <h2>Ticket Scanner</h2>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          <Separator />
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton asChild>
              <div>
                <List />
                <span>List of Tickets</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator />
          <SidebarMenuItem className="px-2">
            <SidebarMenuButton asChild>
              <div>
                <ScanLine />
                <span>Scann Ticket</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <Separator />
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
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
