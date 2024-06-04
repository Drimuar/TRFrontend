import CategoryItem from "../../components/categoryItem/categoryItem";
import styles from "./mainPage.module.scss";

export default function MainPage() {
  const obj = { link: "/catalog/1", img: "./assets/fillimg/image1.png", text: "Конструктора" };
  return (
    <div className={styles.mainPage}>
      <div className={styles.gridContainer}>
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
    </div>
  )
}
