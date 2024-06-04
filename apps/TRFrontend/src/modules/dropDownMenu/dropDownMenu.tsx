import styles from "./dropDownMenu.module.scss";

export default function DropDownMenu() {
  return (
    <div className={styles.dropDownMenu}>
      <button className={styles.catalogButton}>= Каталог</button>
      <div className={styles.dropDownContent}>
      </div>
    </div>
  )
}
