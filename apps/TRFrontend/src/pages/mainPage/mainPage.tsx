import { useSelector } from "react-redux";
import CategoryItem from "../../components/categoryItem/categoryItem";

import styles from "./mainPage.module.scss";

export default function MainPage() {
  const obj = { link: "/catalog/1", img: "../../assets/fillimg/image1.png", text: "Конструктора" };
  const { list, isLoading }: { list: Array<{}>, isLoading: boolean } = useSelector(({ categories }: { categories: any }) => categories);
  return (
    <div className={styles["grid-container"]}>
      {list.slice(0, 12).map((item: any) => {
        return <CategoryItem key={item.id} link={`/catalog/${item.id}`} img={item.image} text={item.name} />
      })}
    </div>
  )
}
