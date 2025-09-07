import "@/app/styles/globals.css";
import Footer from "@/widgets/footer/footer";
import Header from "@/widgets/header/header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
