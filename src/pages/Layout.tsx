import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout(): JSX.Element {
  return (
    <section className="relative bg-gray-800/10">
      <Header />
      <Outlet />
    </section>
  );
}
