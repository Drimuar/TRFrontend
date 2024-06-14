import { Link } from "react-router-dom";
import styles from "./userBarLink.module.scss";

export default function UserBarLink({ name, icon, link, count }: { name: string, icon: string, link: string, count: string | null }) {
  return (
    <>
      <Link to={link} className={styles["user-bar-link"]}><img draggable="false" src={icon} alt="" />{name}<span className={styles["user-bar-count"]}>{count}</span> </Link>
    </>
  );
}
