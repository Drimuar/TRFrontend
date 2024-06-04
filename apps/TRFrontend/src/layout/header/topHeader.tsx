import MainLogo from "../../components/logo/mainLogo";
import UserBar from "../../modules/userBar/userBar";
import styles from "./header.module.scss";

export default function TopHeader() {
  return (
    <div className={styles.topHeader}>
      <MainLogo />
      <UserBar />
    </div>
  );
}
