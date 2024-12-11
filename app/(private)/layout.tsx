import { SidebarProvider, SidebarInset } from "@/lib/ui/sidebar";
import AppSidebar from "@/lib/layout/AppSidebar";
import AppTopbar from "@/lib/layout/AppTopbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
          <AppTopbar />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
