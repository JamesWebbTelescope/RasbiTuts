
import type { ReactNode } from "react";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const layoutStyle = {
    minHeight: "100vh", // full viewport height
    backgroundImage: `C:\Users\SPAC-O-1\Projekter\RaspberryPiTutorials_uge10_11\frontend\src\assets\raspberry-pi-5.png`,
    backgroundSize: "cover", // scale to cover
    backgroundPosition: "center", // center the image
    backgroundRepeat: "no-repeat",
  };

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={layoutStyle}>
      <h1 style={{ color: "black", textAlign: "center", paddingTop: "0vh" }}>
        <Header />
      </h1>
      <main>
          {children}
        </main>
    </div>
  );
}
