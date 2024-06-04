import { Link } from "react-router-dom";
import styles from "./navList.module.scss";

export default function NavList() {
  return (
    <ul className={styles.navList}>
      <li><Link to="/catalog/1">Конструктора</Link></li>
      <li><Link to="/catalog/2">Куклы</Link></li>
      <li><Link to="/catalog/3">Кубики</Link></li>
      <li><Link to="/catalog/4">Спорт</Link></li>
      <li><Link to="/catalog/5">Мячи</Link></li>
    </ul >
  )
}
