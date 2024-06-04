import { Link } from "react-router-dom";
import styles from "./categoryItem.module.scss";

export default function CategoryItem({ link, img, text }: { link: string, img: string, text: string }) {
  return (
    <div className={styles.categoryItem}>
      <Link to={link} className={styles.categoryLink}>
        <img src={img} alt="" />
        <p>{text}</p>
      </Link>
    </div>
  );
}
