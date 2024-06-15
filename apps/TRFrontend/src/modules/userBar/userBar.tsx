import { useDispatch, useSelector } from "react-redux";
import UserBarUser from "../../components/userBarUser/userBarUser";
import { ROUTES } from "../../utils/constants";
import styles from "./userBar.module.scss";
import { useEffect, useState } from "react";
import { toggleForm } from "../../store/user/userSlice";
import { useNavigate } from "react-router-dom";
import UserBarCart from "../../components/userBarCart/userBarCart";
import UserBarLink from "../../components/userBarLink/userBarLink";

export default function UserBar() {
  const barLink = [
    {
      name: "Моя корзина",
      icon: "/assets/icons/cart.svg",
      link: ROUTES.CART,
    },
    {
      name: "Мои заказы",
      icon: "/assets/icons/purchases.svg",
      link: ROUTES.PURCHASES,
    },
    {
      name: "Избранное",
      icon: "/assets/icons/favorite-blue.png",
      link: ROUTES.FAVORITES,
    },
  ]

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser, cart } = useSelector(({ user }: { user: any }) => user);

  const [values, setValues] = useState({ name: "Гость", avatar: "../../assets/icons/user.svg" })
  useEffect(() => {
    if (!currentUser) return

    setValues(currentUser);
  }, [currentUser])
  const handleClick = () => {
    if (!currentUser) {
      dispatch(toggleForm(true))
    } else {
      navigate(ROUTES.USER)
    }
  };

  return (
    <div className={styles["user-bar"]}>
      <UserBarUser name={values.name} icon={values.avatar} handleClick={handleClick} />
      <UserBarCart name={barLink[0].name} icon={barLink[0].icon} link={barLink[0].link} count={cart.length} />
      {barLink.slice(1).map(item => {
        return <UserBarLink key={item.name + item.link} name={item.name} icon={item.icon} link={item.link} />
      })}
    </div>
  )
}
