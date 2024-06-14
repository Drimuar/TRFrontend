import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../store/api/apiSlice";
import { useEffect, useState } from "react";
import { ROUTES } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../store/user/userSlice";
import { getRelatedProducts } from "../../store/products/productsSlice";
import ProductItem from "../../modules/productItem/productItem";
import DescribeBlock from "../../modules/describeBlock/describeBlock";
import Button from "../../components/button/button";

import styles from "./productPage.module.scss";

export default function ProductPage() {
  const id = useParams();
  const navigate = useNavigate();
  const { list, related } = useSelector(({ products }: { products: any; }) => products);
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery(id);
  const dispatch = useDispatch();


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

  useEffect(() => {
    if (!data || !list.length) return
    if (data) {
      dispatch(getRelatedProducts(data.category.id))
    }
  }, [data, dispatch, list.length])
  const addToCart = () => {
    dispatch(addItemToCart(data))
  }
  return !data ? (<div> Loading</div>)
    :
    (
      <>
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
              <Button onClick={addToCart} />
            </div>
            <div className={styles["product__amount"]}>
              В наличии: {800} шт.</div>
            <div className={styles["product__addInfo"]}>
              <h2 className={styles["product__title"]}>Дополнительная информация</h2>
              <p className={styles["product__addInfo__text"]}>
                Можно добавить продукты которые отсутствуют на складе и прочее
              </p>
            </div>
          </div>
        </div>
        <DescribeBlock description={data.description} />
        <div className={styles["related-products"]}>
          <h2 className={styles["product__title"]}>Вам может понравиться</h2>
          <div className={styles["related-container"]}>
            {isLoading ? <div>Loading...</div> : !isSuccess || !related.length ? <div>No results</div> : (related.slice(0, 5).map((item: any) => {
              return <ProductItem item={item} image={item.images[0]} title={item.title} price={item.price} id={item.id} />
            }))}
          </div>
        </div>
      </>
    )
}
