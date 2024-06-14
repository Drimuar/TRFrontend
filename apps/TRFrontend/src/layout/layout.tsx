import { Outlet } from "react-router-dom";
import Header from "./header/header";
import Footer from "./footer";
import styles from "./layout.module.scss";
import UserForm from "../pages/userPage/userForm";
import LineHorizontal from "../components/lineHorizontal/lineHorizontal";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <LineHorizontal />
        <Outlet />
      </main>
      <LineHorizontal />
      <Footer />
      <UserForm />
    </>
  );
}
