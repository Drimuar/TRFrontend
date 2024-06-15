import { useDispatch, useSelector } from "react-redux"
import { sumBy } from "../../utils/common";
import styles from "./cartPage.module.scss";
import { addItemToCart, removeItemFromCart } from "../../store/user/userSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const { cart } = useSelector(({ user }) => user)
  const changeQuantity = (item, quantity) => {
    dispatch(addItemToCart({ ...item, quantity }))
  }
  const removeItem = (id) => {
    dispatch(removeItemFromCart(id))
  }
  return (
    <>
      <h2 className={styles["page-title"]}>Ваша корзина</h2><div className={styles["page-container"]}>
        {!cart.length ? (
          <div className={styles["cart-empty"]}>Здесь пока пусто</div>
        ) : (<div className={styles["cart-container"]}>
          {cart.map((item: any) => {
            const { title, category, images, price, id, quantity } = item;
            return (
              <div className={styles["item"]} key={id}>
                <div className={styles["item-image"]}><img src={images[0]} alt="" /></div>
                <div className={styles["item-describe-container"]}>
                  <p className={styles["item-title"]}>{title}</p>
                  <div className={styles["item-category"]}>Категория: {category.name}</div>
                </div>
                <div className={styles["price-block"]}>
                  <div className={styles["item-price"]}>{price} р</div>
                  <div className={styles["counter"]}>
                    <div className={styles["counter-minus"]} onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                      <img src="" alt="" />
                    </div>
                    <span className={styles["counter-quantity"]}>{quantity}</span>
                    <div className={styles["counter-plus"]} onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
                      <img src="" alt="" />
                    </div>
                  </div>
                </div>

                <div className={styles["item-total"]}><span>Общая цена: </span>{price * quantity} р</div>
                <div className={styles["item-delete"]} onClick={() => removeItem(item.id)}><img src="" alt="" /></div>
              </div>
            );
          })}
        </div>)}
        <div className={styles["action"]}></div>
        <div className={styles["page-right"]}>
          <div className={styles["right-total"]}>
            ОБЩАЯ ЦЕНА: {" "}
            <span>
              {sumBy(cart.map(({ quantity, price }) => quantity * price))} р
            </span>
          </div>
          <div className={styles["right-quantity"]}>товары: {sumBy(cart.map(({ quantity }) => quantity))}</div>
          <p className={styles["right-info"]}>
            Доставка заказов осуществляется с 9 до 18 часов, курьер позвонит вам за 30 минут до прибытия.
            <br /><br /> Во многих районах мы предлагаем доставку во временные интервалы с 9 до 14 или с 13 до 18, а также с 9 до 22 часов.
          </p>
          <button className={styles["right-proceed"]}>Выполнить заказ</button>
        </div>
      </div></>
  )
}
