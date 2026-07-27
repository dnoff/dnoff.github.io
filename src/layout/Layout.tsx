import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-background-primary">
      <Navbar />
      {/* No top padding: fixed transparent nav overlays the hero for a cinematic first viewport. */}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
