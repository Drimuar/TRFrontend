import { current } from "@reduxjs/toolkit";
import styles from "./user.module.scss";
import { useEffect, useState } from "react";
import { updateUser } from "../../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function UserPage() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(({ user }) => user)
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  })
  useEffect(() => {
    if (!currentUser) return

    setValues(currentUser);
  }, [currentUser])

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some(val => !val)

    if (isNotEmpty) return;

    dispatch(updateUser(values));
  }
  return (
    <div className={styles["user-page"]}>
      {!currentUser ? <div> Вы не авторизованы</div> : (
        <form className={styles["title"]} onSubmit={handleSubmit}>
          <div className={styles["form-group"]}>
            <input type="email" name="email" placeholder="Введите email" value={values.email} autoComplete="off" onChange={handleChange} required />
            <input type="name" name="name" placeholder="Введите имя" value={values.name} autoComplete="off" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Введите пароль" value={values.password} autoComplete="off" onChange={handleChange} required />
            <input type="avatar" name="avatar" placeholder="Ссылка на изображение профиля" value={values.avatar} autoComplete="off" onChange={handleChange} required />
          </div>
          <button type="submit" className={styles["submit"]}>
            Обновить
          </button>
        </form>
      )}
    </div >
  )

}
