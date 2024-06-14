import { Link } from "react-router-dom";
import styles from "./productItem.module.scss";
import Button from "../../components/button/button";

export default function ProductItem({ image, title, price, id }: { image: any, title: any, price: any, id: any }) {
  const dollar = 100;
  return (
    <Link to={`/products/${id}`} key={id} className={styles["product-card-container"]}>
      <div className={styles["product-top"]}>
        <img src={image} alt={title} />
        {/* <button className={styles["product-top-compare"]}><img src="../../assets/icons/compare.svg" alt="" /></button> */}
        <button className={styles["product-top-favorite"]}><img src="../../assets/icons/favorite.png" alt="" /></button>
      </div>
      <div className={styles["product-bottom"]}>
        <p className={styles["product-bottom-price"]}>{price * dollar} р</p>
        <p className={styles["product-bottom-title"]}>{title}</p>
        <Button />
      </div>
    </Link >
  )
}
