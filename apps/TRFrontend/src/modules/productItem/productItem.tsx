import { Link } from "react-router-dom";
import styles from "./productItem.module.scss";
import Button from "../../components/button/button";

export default function ProductItem() {
  return (
    <div className={styles["product-card-container"]}>
      <div className={styles["product-top"]}>
        <img src="../../assets/fillimg/image1.png" alt="" />
        <button className={styles["product-top-compare"]}><img src="../../assets/icons/compare.svg" alt="" /></button>
        <button className={styles["product-top-favorite"]}><img src="../../assets/icons/favorite.png" alt="" /></button>
      </div>
      <div className={styles["product-bottom"]}>
        <Link to="/product/" className={styles["product-bottom-price"]}>1 420 р</Link>
        <Link to="/product/" className={styles["product-bottom-title"]}>Мягкая игрушка СОВА CASTLELADY Подушка и плед 3 в 1 Сова серый 40 см</Link>
        <Button />
      </div>
    </div >
  )
}
