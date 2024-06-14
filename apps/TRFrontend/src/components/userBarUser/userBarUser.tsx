import styles from "./userBarUser.module.scss";

export default function UserBarUser({ name, icon, handleClick }: { name: string, icon: string, handleClick: any }) {
  return (
    <div onClick={handleClick} className={styles["user-bar-link"]}><img draggable="false" src={icon} alt="" />{name}</div>
  );
}
