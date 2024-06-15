import { Link } from "react-router-dom";
import styles from "./productItem.module.scss";
import Button from "../../components/button/button";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, addItemToFavorite, removeItemFromFavorite } from "../../store/user/userSlice";
import { useState } from "react";

export default function ProductItem({ item, image, title, price, id }: { item: any, image: any, title: any, price: any, id: any }) {
  const dispatch = useDispatch();
  const { favorite } = useSelector(({ user }) => user)
  const addToCart = () => {
    dispatch(addItemToCart(item))
  }
  const addToFavorite = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    if (favorite.find(item => item.id === id)) {
      dispatch(removeItemFromFavorite(id))
    } else dispatch(addItemToFavorite(item))

  }

  return (
    <Link to={`/products/${id}`} key={id} className={styles["product-card-container"]}>
      <div className={styles["product-top"]}>
        <img src={image} alt={title} />
        {/* <button className={styles["product-top-compare"]}><img src="../../assets/icons/compare.svg" alt="" /></button> */}
        <button onClick={addToFavorite} className={`${styles["product-top-favorite"]} ${favorite.find(item => item.id === id) ? styles["product-top-favorite-active"] : ""}`}></button>
      </div>
      <div className={styles["product-bottom"]}>
        <p className={styles["product-bottom-price"]}>{price} р</p>
        <p className={styles["product-bottom-title"]}>{title}</p>
        <Button onClick={addToCart} />
      </div>
    </Link >
  )
}
