import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout(): JSX.Element {
  return (
    <section className="relative bg-gray-800/10">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
