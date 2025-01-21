import { Outlet } from "react-router-dom";
import Header from "./header";
import './layout.css';

const Layout = () => {
  return (
    <main className="main-container">
      <Header />
      <section className="container-layout">
        <Outlet />
      </section>
    </main>
  );
};

export default Layout;
