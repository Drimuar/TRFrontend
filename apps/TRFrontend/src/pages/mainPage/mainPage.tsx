import CategoryItem from "../../components/categoryItem/categoryItem";
import LineHorizontal from "../../components/lineHorizontal/lineHorizontal";
import styles from "./mainPage.module.scss";

export default function MainPage() {
  const obj = { link: "/catalog/1", img: "../../assets/fillimg/image1.png", text: "Конструктора" };
  return (
    <>
      <LineHorizontal />
      <div className={styles["grid-container"]}>
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
        <CategoryItem link={obj.link} img={obj.img} text={obj.text} />
      </div>
    </>
  )
}
