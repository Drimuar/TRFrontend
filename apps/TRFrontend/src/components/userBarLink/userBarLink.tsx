import { Link } from "react-router-dom";
import styles from "./userBarLink.module.scss";

export default function UserBarLink({ name, icon, link }: { name: string, icon: string, link: string }) {
  return (
    <Link to={link} className={styles["user-bar-link"]}><img draggable="false" src={icon} alt="" />{name}</Link>
  );
}
