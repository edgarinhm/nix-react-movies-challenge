import { Outlet } from "react-router-dom";
import Header from "./header";

const Layout = () => {
  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
