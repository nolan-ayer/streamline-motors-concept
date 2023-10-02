"use client";

import { useRouter } from "next/router";
import styles from "./Header.module.css";
import HeaderNav from "./HeaderNav";
import HeaderPromo from "./HeaderPromo";

export default function Header() {
  const { pathname } = useRouter;
  return (
    <div className={styles.header}>
      <HeaderNav />
      {pathname == "/" && <HeaderPromo />}
    </div>
  );
}
