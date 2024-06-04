import styles from "./searchBar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input className={styles.searchInput} placeholder="Поиск" type="text" />
      <button className={styles.searchButton}><img draggable="false" src="./assets/icons/search.svg" alt="" /></button>
    </div >
  )
}
