import BreadcrumbsTop from "../../components/breadcrumbsTop/breadcrumbsTop";
import DescribeBlock from "../../modules/describeBlock/describeBlock";
import LineHorizontal from "../../components/lineHorizontal/lineHorizontal";
import styles from "./productPage.module.scss";
import Button from "../../components/button/button";

export default function ProductPage() {

  return (
    <>
      <LineHorizontal />
      <BreadcrumbsTop />
      <div className={styles["product__row"]}>
        <div className={styles["product__left"]}>
          <h2 className={styles["product__title"]}>Мягкая игрушка СОВА CASTLELADY Подушка и плед 3 в 1 Сова серый 40 см</h2>
          <div className={styles["product__imageContainer"]}>
            <div className={styles["product__imageSelector"]}>
              <img src="../../assets/fillimg/owl1.png" alt="" />
              <img src="../../assets/fillimg/owl2.png" alt="" />
              <img src="../../assets/fillimg/owl3.png" alt="" />
              <img src="../../assets/fillimg/owl4.png" alt="" />
            </div>
            <div className={styles["product__image"]}><img src="../../assets/fillimg/BigOwl.png" alt="" /></div>
          </div>
        </div>
        <div className={styles["product__right"]}>
          <div className={styles["product__priceContainer"]}>
            <h2 className={styles["product__title"]}>Цена:</h2>
            <Button />
          </div>
          <div className={styles["product__amount"]}>
            В наличии: 600 шт.</div>
          <div className={styles["product__addInfo"]}>
            <h2 className={styles["product__title"]}>Дополнительная информация</h2>
            <p className={styles["product__addInfo__text"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque. Maiores inventore, saepe eveniet facilis consequatur provident hic numquam fugit magni maxime rerum aut aliquid placeat odit corporis, in voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque. Maiores inventore, saepe eveniet facilis consequatur provident hic numquam fugit magni maxime rerum aut aliquid placeat odit corporis, in voluptatibus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, cumque. Maiores inventore, saepe eveniet facilis consequatur provident hic numquam fugit magni maxime rerum aut aliquid placeat odit corporis, in voluptatibus.
            </p>
          </div>
        </div>
      </div>
      <DescribeBlock />
      <DescribeBlock />
    </>
  )
}
