import Sidebar from "@/widgets/sidebar/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family budget",
  description: "Family budget",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sidebar>{children}</Sidebar>;
}
