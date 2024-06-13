import styles from "./footerColumn.module.scss";

export default function FooterColumn({ links }: { links: { link: string, text: string }[] }) {
  return (
    <div className={styles["footer-column"]}>
      {links.map((item, index) => <a key={index + item.text} href={item.link} > {item.text}</a>)}
    </div >
  );
}
