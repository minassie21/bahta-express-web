import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNavigation } from "./MobileNavigation";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col font-sans text-gray-900">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileNavigation />
    </div>
  );
}
