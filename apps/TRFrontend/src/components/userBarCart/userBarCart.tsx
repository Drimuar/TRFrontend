import { Link } from "react-router-dom";
import styles from "./userBarCart.module.scss";

export default function UserBarCart({ name, icon, link, count }: { name: string, icon: string, link: string, count: number | null }) {
  return (
    <Link to={link} className={styles["user-bar-link"]}><img draggable="false" src={icon} alt="" />{name}{count ? <span className={styles["user-bar-count"]}>{count}</span> : ""} </Link>
  );
}
