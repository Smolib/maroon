import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";

function Layout() {
  const { hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const timerId = setTimeout(() => {
        const targetElement = document.getElementById(hash.substring(1));
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }, 200);

      return () => clearTimeout(timerId);
    }
    return undefined;
  }, [key, hash]);
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
