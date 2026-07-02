import { ReactNode } from "react";
import Header from "./Header";

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}
