
import type { ReactNode } from "react";
import Header from "./Header";
import RaspberryPiImage from "./Image";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="dark min-h-screen flex flex-col bg-black text-gray-100">
      <Header />
      <main className="grow max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      
      <RaspberryPiImage/>

      <footer className="bg-gray-900 text-center py-4 text-gray-400">
        © 2025 Lagersystem. All rights reserved.
      </footer>

    </div>
  );
}
