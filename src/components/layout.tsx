import Header from "./header";
import Footer from "./footer";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
