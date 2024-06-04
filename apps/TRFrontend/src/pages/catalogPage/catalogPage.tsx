import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

import styles from "./catalogPage.module.scss";


export default function CatalogPage() {
  const pagesNoIcon = [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Страница 1',
      href: '/catalog/1',
    },
    {
      label: 'Страница 2',
      href: '/catalog/2',
    },
    {
      label: 'Страница 3',
      href: '/catalog/3',
    },
  ];
  return (
    <>
      <div className={styles.catalogBreadcrumbs}>
        <Theme preset={presetGpnDefault} className="App">
          <Breadcrumbs items={pagesNoIcon} size="m" fitMode="scroll" />
        </Theme>
      </div>
      {/*
      Column 1
        Breadcrubs
        Filter
      Column 2
        CatalogProducts
      */}
    </>
  )
}
