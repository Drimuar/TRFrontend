import { Link } from "react-router-dom";
import styles from "./mainLogo.module.scss";

export default function MainLogo() {
  return (
    <Link draggable="false" className={styles["logo-link"]} to={"/"}></Link>
  )
}
