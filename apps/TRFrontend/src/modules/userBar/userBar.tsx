import UserBarLink from "../../components/userBarLink/userBarLink"
import styles from "./userBar.module.scss";
export default function UserBar() {
  const barLink = [{
    name: "Пользователь",
    icon: "/assets/icons/user.svg",
  },
  {
    name: "Моя корзина",
    icon: "/assets/icons/cart.svg",
  },
  {
    name: "Мои покупки",
    icon: "/assets/icons/purchases.svg",
  },]
  return (
    <div className={styles["user-bar"]}>
      <UserBarLink name={barLink[0].name} icon={barLink[0].icon} />
      <UserBarLink name={barLink[1].name} icon={barLink[1].icon} />
      <UserBarLink name={barLink[2].name} icon={barLink[2].icon} />
    </div>
  )
}
