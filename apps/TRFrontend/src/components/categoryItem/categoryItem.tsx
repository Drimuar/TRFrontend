import { Link } from "react-router-dom";
import styles from "./categoryItem.module.scss";

type TItem = {
  link: string;
  img: string;
  text: string;
};

export default function CategoryItem({ link, img, text }: TItem) {
  return (
    <div className={styles["category-item"]}>
      <Link to={link} className={styles["category-link"]}>
        <img src={img} alt="" />
        <p>{text}</p>
      </Link>
    </div>
  );
}
