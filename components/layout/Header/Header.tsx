import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";
import HeaderPromo from "./HeaderPromo";

export default function Header() {
  return (
    <div className={styles.header}>
      <HeaderNav />
      <HeaderPromo />
    </div>
  );
}
