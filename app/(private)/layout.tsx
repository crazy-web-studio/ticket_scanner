import { SidebarProvider, SidebarInset } from "@/lib/ui/sidebar";
import AppSidebar from "@/lib/layout/AppSidebar";
import AppTopbar from "@/lib/layout/AppTopbar";
import { ThemeProvider } from "@/lib/components/ThemeProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <main>
            <AppTopbar />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
