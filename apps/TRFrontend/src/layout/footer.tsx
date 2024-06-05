import FooterColumn from "../modules/footerColumn/footerColumn";
import styles from "./footer.module.scss";
import { footerLinks } from "../utils/mocs";
import LineHorizontal from "../components/lineHorizontal/lineHorizontal";

export default function Footer() {

  return (
    <div className={styles.footer}>
      <LineHorizontal />
      <section className={styles["footer-row"]}>
        {footerLinks.map((item) => <FooterColumn links={item} />)}
        {/* <FooterColumn links={footerLinks.column1} />
        <FooterColumn links={footerLinks.column2} />
        <FooterColumn links={footerLinks.column3} />
        <FooterColumn links={footerLinks.column4} /> */}
      </section>
    </div>
  );
}
