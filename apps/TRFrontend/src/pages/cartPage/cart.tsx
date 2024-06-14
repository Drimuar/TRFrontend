import { useSelector } from "react-redux"
import LineHorizontal from "../../components/lineHorizontal/lineHorizontal";

export default function CartPage() {
  const dollar = 100;
  const { cart } = useSelector(({ user }) => user)
  return (
    <>
      <LineHorizontal />
      <div>
        <h2>Корзина</h2>
        {!cart.length ? (
          <div>Here is empty</div>
        ) : (<div>
          {cart.map((item: any) => {
            const { title, category, image, price, id, quantity } = item
            return (
              <div className="item" key={id}>
                <div className="image"><img src={image} alt="" /></div>
                <div>
                  <p className="title">{title}</p>
                  <div className="category">{category.name}</div>
                </div>
                <div className="price">{price * dollar}</div>
                <div>
                  <div className="minus">
                    <img src="" alt="" />
                  </div>
                  <span>{quantity}</span>
                  <div className="plus">
                    <img src="" alt="" />
                  </div>
                </div>

                <div className="total">{price * dollar * quantity}</div>
                <div className="delete"><img src="" alt="" /></div>
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
            {/* Давайте пойдем в утилс 3:31:40  */}
          </span>
        </div>
      </div>
    </>
  )
}
