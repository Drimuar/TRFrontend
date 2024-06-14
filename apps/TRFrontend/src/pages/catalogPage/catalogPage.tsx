import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Pagination } from '@consta/uikit/Pagination';

import styles from "./catalogPage.module.scss";
import LineHorizontal from '../../components/lineHorizontal/lineHorizontal';
import ProductItem from '../../modules/productItem/productItem';
import CountFilter from '../../components/countFilter/countFilter';
import CheckFilter from '../../components/checkFilter/checkFilter';
import BreadcrumbsTop from '../../components/breadcrumbsTop/breadcrumbsTop';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../../store/api/apiSlice';
import { title } from 'process';


export default function CatalogPage() {
  const { id } = useParams();
  const { list } = useSelector(({ categories }: { categories: any }) => categories)

  const defaultValues = {
    title: "",
    price_min: 0,
    price_max: 0,
  }
  const defaultParams = {
    categoryId: "",
    ...defaultValues
  }
  const defaultCat = [
    {
      label: 'Главная',
      href: '/',
    },
  ]

  const [values, setValues] = useState(defaultValues);
  const [params, setParams] = useState(defaultParams);
  const [cat, setCat] = useState(defaultCat)

  useEffect(() => {
    if (!id) return;
    setValues(defaultValues);
    setParams({ ...defaultParams, categoryId: id })
  }, [id]);

  useEffect(() => {
    if (!id || !list.length) return;

    const categories = list.find((item: any) => item.id === +id)
    setCat([...defaultCat, { 'label': categories.name, 'href': `/catalog/${categories.id}` }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list, id])

  const { data, isLoading, isSuccess } = useGetProductsQuery(params);


  const maxOnPage = 8
  const [page, setPage] = useState(1);

  // const { list }: { list: any } = useSelector(({ products }: { products: any }) => products);
  const handleChange = ({ target: { value, name } }: any) => {
    setValues({ ...values, [name]: value });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (e: any) => {
    e.preventDefault();

    setParams({ ...params, ...values });
  }
  console.log(cat)

  return !data ? (<div> Loading</div>)
    : (
      <>
        <LineHorizontal />
        {!cat.length && cat.length <= 1 ? <div>Loading...</div> : (<BreadcrumbsTop category={cat} />)}
        <div className={styles["catalog-page-content"]}>
          <div className={styles["catalog-page-left-side"]}>
            <div className={styles["catalog-nav-menu"]}></div>
            <div className={styles["catalog-filter"]}>
              <form className={styles["filters"]} onSubmit={handleSubmit}>
                <div className={styles["filter"]}>
                  <input type="text" name="title" onChange={handleChange} placeholder="Product name" value={values.title} />
                </div>
                <div className={styles["filter"]}>
                  <span>От</span>
                  <input type="number" name="price_min" onChange={handleChange} placeholder="0" value={values.price_min} />
                </div>
                <div className={styles["filter"]}>
                  <span>До</span>
                  <input type="number" name="price_max" onChange={handleChange} placeholder="0" value={values.price_max} />
                </div>
                <button type="submit" hidden />
              </form>
            </div>
          </div>
          <div className={styles["catalog-page-right-side"]}>
            <div className={styles["catalog-card-container"]}>
              {isLoading ? <div>Loading...</div> : !isSuccess || !data.length ? <div>No results</div> : (data.slice(maxOnPage * page - maxOnPage, maxOnPage * page).map((item: any) => {
                return <ProductItem image={item.images[0]} title={item.title} price={item.price} id={item.id} />
              }))}
            </div>
            <div className={styles["catalog-page-pagination"]}>
              <Theme preset={presetGpnDefault}>
                <Pagination
                  items={Math.ceil(data.length / 8)}
                  value={page}
                  onChange={setPage}
                  showFirstPage
                  showLastPage
                  visibleCount={7}
                />
              </Theme>
            </div>
          </div>
        </div>
      </>
    )
}
