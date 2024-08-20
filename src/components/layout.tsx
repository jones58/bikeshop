import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
