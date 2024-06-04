import styles from "./footerColumn.module.scss";

export default function FooterColumn({ links }: { links: Array<object> }) {
  return (
    <div className={styles.footerColumn}>
      {links.map((item: any) => <a href={item.link} > {item.text}</a>)
      }
    </div >
  );
}
