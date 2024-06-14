import UserBarLink from "../../components/userBarLink/userBarLink"
import { ROUTES } from "../../utils/constants";
import styles from "./userBar.module.scss";
export default function UserBar() {
  const barLink = [{
    name: "Пользователь",
    icon: "/assets/icons/user.svg",
    link: ROUTES.USER,
  },
  {
    name: "Моя корзина",
    icon: "/assets/icons/cart.svg",
    link: ROUTES.CART,
  },
  {
    name: "Мои покупки",
    icon: "/assets/icons/purchases.svg",
    link: ROUTES.PURCHASES,
  },
  {
    name: "Избранное",
    icon: "/assets/icons/favorite.png",
    link: ROUTES.FAVORITES,
  },
  ]
  const noitification = "2";
  return (
    <div className={styles["user-bar"]}>
      {barLink.map(item => {
        return <UserBarLink name={item.name} icon={item.icon} link={item.link} count={item.name == "Моя корзина" ? noitification : null} />
      })}
    </div>
  )
}
