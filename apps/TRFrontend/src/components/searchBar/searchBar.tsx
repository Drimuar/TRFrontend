import styles from "./searchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles["search-bar"]}>
      <input className={styles["search-input"]} placeholder="Поиск" type="text" />
      <button className={styles["search-button"]}><img draggable="false" src="./assets/icons/search.svg" alt="" /></button>
    </div >
  )
}
