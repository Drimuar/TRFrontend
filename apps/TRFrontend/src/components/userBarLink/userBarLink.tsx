import styles from "./userBarLink.module.scss";

export default function UserBarLink({ name, icon }: { name: string, icon: string }) {
  return <a href="#" className={styles["user-bar-link"]}><img draggable="false" src={icon} alt="" />{name}</a>;
}
