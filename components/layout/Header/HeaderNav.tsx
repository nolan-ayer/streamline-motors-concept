import styles from "./Header.module.css";

import Link from "next/link";

export default function HeaderNav() {
  const links = [
    { key: 0, text: "Home", to: "/" },
    { key: 1, text: "Inventory", to: "/inventory" },
    { key: 2, text: "About Us", to: "/" },
    { key: 3, text: "Contact", to: "/" },
    { key: 4, text: "Financing", to: "/" },
  ];

  const renderLinks = links.map((link) => {
    return (
      <li className={styles.navItem} key={link.key}>
        <Link className={"nextLink"} href={link.to}>
          {link.text}
        </Link>
      </li>
    );
  });

  return (
    <div
      className={styles.headerLayer}
      style={{ backgroundColor: "rgb(0,0,0)" }}
    >
      <a className={styles.titleBanner} href="/">
        <h3 className={styles.logoName}>STREAMLINE MOTORS</h3>
        <img
          alt="Silhouette of a stylish yet understated sports car"
          className={styles.logoImage}
          src="https://t3.ftcdn.net/jpg/03/33/85/60/360_F_333856092_w73C86HQch50zYFFafV6nEgP5qNP9jyv.jpg"
        />
      </a>
      <nav>
        <ul className={styles.navList}>{renderLinks}</ul>
      </nav>
    </div>
  );
}
