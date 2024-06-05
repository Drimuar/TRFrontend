import DropDownMenu from "../../modules/dropDownMenu/dropDownMenu";
import NavList from "../../modules/navList/navList";
import SearchBar from "../../components/searchBar/searchBar";
import styles from "./header.module.scss";

export default function NavBar() {
  return <div className={styles["nav-bar"]}>
    <DropDownMenu />
    <NavList />
    <SearchBar />
  </div>;
}
