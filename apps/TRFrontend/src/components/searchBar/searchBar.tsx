import { useState } from "react";
import styles from "./searchBar.module.scss";
import { useGetProductsQuery } from "../../store/api/apiSlice";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = ({ target: { value } }: any) => {
    setSearchValue(value);
  }
  const { data, isLoading, isSuccess } = useGetProductsQuery({ title: searchValue });
  return (
    <form className={styles["search-bar"]}>
      <input
        className={styles["search-input"]}
        type="search"
        name="search"
        placeholder="Поиск"
        autoComplete="off"
        onChange={handleSearch}
        value={searchValue}
      />
      <button className={styles["search-button"]}><img draggable="false" src="./assets/icons/search.svg" alt="" /></button>
      {searchValue && <div className={styles["search-box"]}>
        {isLoading ? "Loading" : !isSuccess ? "No Data" : !data.length ? "No results" : (
          data.slice(0, 5).map(({ title, images, id }: { title: string, images: string, id: string }) => {
            return (
              <Link key={id} onClick={() => setSearchValue("")} to={`/products/${id}`} className={styles["search-link"]}>
                <div className={styles["search-image"]}><img src={images} alt="" /></div>
                <div className={styles["search-title"]}>{title}</div>
              </Link>
            )
          })
        )}
      </div>}
    </form >
  )
}
