import styles from "./breadcrumbsTop.module.scss";
import { Breadcrumbs } from '@consta/uikit/Breadcrumbs';
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

export default function BreadcrumbsTop() {
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
    <div className={styles["catalog-breadcrumbs"]}>
      <Theme preset={presetGpnDefault} className="App">
        <Breadcrumbs items={pagesNoIcon} size="s" fitMode="scroll" />
      </Theme>
    </div>
  )
}
