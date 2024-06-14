import { Link } from "react-router-dom";
import styles from "./navList.module.scss";
import { useSelector } from "react-redux";


export default function NavList() {
  // const nav = [{
  //   catalogId: "1",
  //   name: "Конструктора"
  // }, {
  //   catalogId: "2",
  //   name: "Куклы"
  // }, {
  //   catalogId: "3",
  //   name: "Кубики"
  // }, {
  //   catalogId: "4",
  //   name: "Спорт"
  // }, {
  //   catalogId: "5",
  //   name: "Мячи"
  // },];

  const { list, isLoading }: { list: any, isLoading: boolean } = useSelector(({ categories }: { categories: any }) => categories);

  // todo: isLoading сделать загрузку пока грузит

  return (
    <ul className={styles["nav-list"]}>
      {list.slice(0, 5).map((item: any) => {
        return <li key={item.id}><Link to={`/catalog/${item.id}`}>{item.name}</Link></li>
      })}
    </ul>
  )
}
