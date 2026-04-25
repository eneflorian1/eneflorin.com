"use client";

import { Header } from "./Header";
import { BottomNav } from "./BottomNav";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
  withHeader?: boolean;
  withBottomNav?: boolean;
}

export function PageWrapper({ 
  children, 
  className = "page-content", 
  withHeader = true, 
  withBottomNav = true 
}: PageWrapperProps) {
  return (
    <>
      {withHeader && <Header />}
      <main className={className}>
        {children}
      </main>
      {withBottomNav && <BottomNav />}
    </>
  );
}
