import FooterColumn from "../modules/footerColumn/footerColumn";
import styles from "./footer.module.scss";
import { footerLinks } from "../utils/mocs";
import LineHorizontal from "../components/lineHorizontal/lineHorizontal";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <LineHorizontal />
      <section className={styles["footer-row"]}>
        {footerLinks.map((item, index) => <FooterColumn key={index} links={item} />)}
        {/* <FooterColumn links={footerLinks.column1} />
        <FooterColumn links={footerLinks.column2} />
        <FooterColumn links={footerLinks.column3} />
        <FooterColumn links={footerLinks.column4} /> */}
      </section>
    </footer>
  );
}
