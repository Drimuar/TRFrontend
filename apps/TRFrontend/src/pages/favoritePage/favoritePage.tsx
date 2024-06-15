import { useDispatch, useSelector } from "react-redux"
import styles from "./favoritePage.module.scss";
import { removeItemFromFavorite } from "../../store/user/userSlice";
import { useState } from "react";
import ProductItem from "../../modules/productItem/productItem";

export default function FavoritePage() {
  const dispatch = useDispatch();
  const { favorite } = useSelector(({ user }) => user)

  const removeItem = (id) => {
    dispatch(removeItemFromFavorite(id))
  }
  const maxOnPage = 8
  const [page, setPage] = useState(1);
  return (
    <>
      <h2 className={styles["page-title"]}>Избранное</h2>
      <div className={styles["catalog-card-container"]}>
        {!favorite.length ? <div className={styles["cart-empty"]}>Здесь пока пусто</div> : (favorite.slice(maxOnPage * page - maxOnPage, maxOnPage * page).map((item: any) => {
          return <ProductItem item={item} image={item.images[0]} title={item.title} price={item.price} id={item.id} />
        }))}
      </div>
    </>
  )
}
