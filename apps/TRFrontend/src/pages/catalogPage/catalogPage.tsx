import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import { Pagination } from '@consta/uikit/Pagination';


import styles from "./catalogPage.module.scss";
import LineHorizontal from '../../components/lineHorizontal/lineHorizontal';
import ProductItem from '../../modules/productItem/productItem';
import CountFilter from '../../components/countFilter/countFilter';
import CheckFilter from '../../components/checkFilter/checkFilter';
import BreadcrumbsTop from '../../components/breadcrumbsTop/breadcrumbsTop';




export default function CatalogPage() {

  const page = 1;
  return (
    <>
      <LineHorizontal />
      <BreadcrumbsTop />
      <div className={styles["catalog-page-content"]}>
        <div className={styles["catalog-page-left-side"]}>
          <div className={styles["catalog-nav-menu"]}></div>
          <div className={styles["catalog-filter"]}>
            <CountFilter />
            <CheckFilter />
            <CheckFilter />
          </div>
        </div>
        <div className={styles["catalog-page-right-side"]}>
          <div className={styles["catalog-card-container"]}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          <div>
            <Theme preset={presetGpnDefault}>
              <Pagination
                items={15}
                value={page}
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
