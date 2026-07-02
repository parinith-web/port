import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="flex min-h-screen flex-col bg-black text-white"
      style={{ zoom: 1.1 }}
    >
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
