import Footer from "./footer";
import Navbar from "./navbar";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Readonly<PageLayoutProps>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
