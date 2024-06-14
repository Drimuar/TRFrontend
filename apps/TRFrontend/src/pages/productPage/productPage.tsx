import BreadcrumbsTop from "../../components/breadcrumbsTop/breadcrumbsTop";
import DescribeBlock from "../../modules/describeBlock/describeBlock";
import LineHorizontal from "../../components/lineHorizontal/lineHorizontal";
import styles from "./productPage.module.scss";
import Button from "../../components/button/button";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/api/apiSlice";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/constants";


export default function ProductPage() {
  const id = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery(id);

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.MAIN);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, isFetching, isSuccess]);
  console.log(data)

  const [currentImage, setCurrentImage] = useState();
  useEffect(() => {
    if (!data || !data.images.length) return;
    setCurrentImage(data.images[0]);
  }, [data])

  return !data ? (<div> Loading</div>)
    :
    (
      <>
        <LineHorizontal />
        <div className={styles["product__row"]}>
          <div className={styles["product__left"]}>
            <h2 className={styles["product__title"]}>{data.title}</h2>
            <div className={styles["product__imageContainer"]}>
              <div className={styles["product__imageSelector"]}>
                {data.images.map((item: any) => <img src={item} alt="" onClick={() => setCurrentImage(item)} />)}
              </div>
              <div className={styles["product__image"]}><img src={currentImage} alt="" /></div>
            </div>
          </div>
          <div className={styles["product__right"]}>
            <div className={styles["product__priceContainer"]}>
              <h2 className={styles["product__title"]}>Цена: {data.price} р</h2>
              <Button />
            </div>
            <div className={styles["product__amount"]}>
              В наличии: {Math.round(Math.random() * (10 - 4000) + 4000)} шт.</div>
            <div className={styles["product__addInfo"]}>
              <h2 className={styles["product__title"]}>Дополнительная информация</h2>
              <p className={styles["product__addInfo__text"]}>
                Можно добавить продукты которые отсутствуют на складе и прочее
              </p>
            </div>
          </div>
        </div>
        <DescribeBlock description={data.description} />
      </>
    )
}
