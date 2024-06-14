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
    <div>
      <h2>Корзина</h2>
      {!cart.length ? (
        <div>Here is empty</div>
      ) : (<div>
        {cart.map((item: any) => {
          const { title, category, images, price, id, quantity } = item
          return (
            <div className="item" key={id}>
              <div className="image"><img src={images[0]} alt="" /></div>
              <div>
                <p className="title">{title}</p>
                <div className="category">{category.name}</div>
              </div>
              <div className="price">{price}</div>
              <div>
                <div className="minus" onClick={() => changeQuantity(item, Math.max(1, quantity - 1))}>
                  <img src="" alt="" />-
                </div>
                <span>{quantity}</span>
                <div className="plus" onClick={() => changeQuantity(item, Math.max(1, quantity + 1))}>
                  <img src="" alt="" />+
                </div>
              </div>

              <div className="total">{price * quantity}</div>
              <div className="delete" onClick={() => removeItem(item.id)}><img src="" alt="" />delete</div>
            </div>
          )
        })
        }
      </div>)
      }
      <div className="action"></div>
      <div className="total-price">
        TOTAL PRICE: {" "}
        <span>
          {
            sumBy(cart.map(({ quantity, price }) => quantity * price))
          } р
        </span>
      </div>
      <button className={styles["proceed"]}>Выполнить заказ</button>
    </div>
  )
}
