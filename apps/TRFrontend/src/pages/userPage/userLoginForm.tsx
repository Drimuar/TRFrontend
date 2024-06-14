import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/user/userSlice";

import styles from "./user.module.scss";

export default function UserLoginForm({ closeForm, toggleCurrentFormType }: { closeForm: any, toggleCurrentFormType: any }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value })
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const isNotEmpty = Object.values(values).some(val => !val)

    if (isNotEmpty) return;

    dispatch(loginUser(values));
    closeForm()
  }
  return (
    <div className={styles["wrapper"]} >
      <div className={styles["close"]} onClick={closeForm}></div>
      <div className={styles["title"]}>Авторизация</div>

      <form className={styles["title"]} onSubmit={handleSubmit}>
        <div className={styles["form-group"]}>
          <input type="email" name="email" placeholder="Введите email" value={values.email} autoComplete="off" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Введите password" value={values.password} autoComplete="off" onChange={handleChange} required />
        </div>
        <div className={styles["link"]} onClick={() => toggleCurrentFormType("signup")}>
          Создать Аккаунт
        </div>
        <button className={styles["submit"]} type="submit"> Войти в аккаунт</button>
      </form>
    </div >
  )
}
