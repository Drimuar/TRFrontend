import { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../store/user/userSlice";

import styles from "./user.module.scss";

export default function UserSignupForm({ closeForm, toggleCurrentFormType }: { closeForm: any, toggleCurrentFormType: any }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some(val => !val)

    if (isNotEmpty) return;

    dispatch(createUser(values));
    closeForm();
  }
  return (
    <div className={styles["wrapper"]} >
      <div className={styles["close"]} onClick={closeForm}></div>
      <div className={styles["title"]}>Регистрация</div>

      <form className={styles["form"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input type="email" name="email" placeholder="Введите email" value={values.email} autoComplete="off" onChange={handleChange} required />
          <input type="name" name="name" placeholder="Введите имя" value={values.name} autoComplete="off" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Введите пароль" value={values.password} autoComplete="off" onChange={handleChange} required />
          <input type="avatar" name="avatar" placeholder="Ссылка на изображение профиля" value={values.avatar} autoComplete="off" onChange={handleChange} required />
        </div>
        <div className={styles["link"]} onClick={() => toggleCurrentFormType("login")}>
          Уже есть Аккаунт
        </div>
        <button className={styles["submit"]} type="submit"> Создать аккаунт</button>
      </form>
    </div >
  )
}
