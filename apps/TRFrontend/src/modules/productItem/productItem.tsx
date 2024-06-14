import { Link } from "react-router-dom";
import styles from "./productItem.module.scss";
import Button from "../../components/button/button";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/user/userSlice";

export default function ProductItem({ item, image, title, price, id }: { item: any, image: any, title: any, price: any, id: any }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addItemToCart(item))
  }

  return (
    <Link to={`/products/${id}`} key={id} className={styles["product-card-container"]}>
      <div className={styles["product-top"]}>
        <img src={image} alt={title} />
        {/* <button className={styles["product-top-compare"]}><img src="../../assets/icons/compare.svg" alt="" /></button> */}
        <button className={styles["product-top-favorite"]}><img src="../../assets/icons/favorite.png" alt="" /></button>
      </div>
      <div className={styles["product-bottom"]}>
        <p className={styles["product-bottom-price"]}>{price} р</p>
        <p className={styles["product-bottom-title"]}>{title}</p>
        <Button onClick={addToCart} />
      </div>
    </Link >
  )
}
