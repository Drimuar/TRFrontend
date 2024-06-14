import { useSelector } from "react-redux";
import CategoryItem from "../../components/categoryItem/categoryItem";
import LineHorizontal from "../../components/lineHorizontal/lineHorizontal";
import styles from "./mainPage.module.scss";

export default function MainPage() {
  const obj = { link: "/catalog/1", img: "../../assets/fillimg/image1.png", text: "Конструктора" };
  const { list, isLoading }: { list: Array<{}>, isLoading: boolean } = useSelector(({ categories }: { categories: any }) => categories);
  return (
    <>
      <LineHorizontal />
      <div className={styles["grid-container"]}>
        {list.slice(0, 12).map((item: any) => {
          return <CategoryItem link={`/catalog/${item.id}`} img={item.image} text={item.name} />
        })}
      </div>
    </>
  )
}
