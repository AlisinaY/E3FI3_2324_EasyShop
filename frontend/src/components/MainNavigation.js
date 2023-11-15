import React from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./MainNavigation.module.css";

export default function Navigation() {
  const header = (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span>
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span>Easy Shop</span>
        </div>
        <div className={styles["main-nav"]}>
          <ul className={styles.nav}>
            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/">
                Angbot
              </Link>
            </li>

            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/">
                Shop
              </Link>
            </li>
            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/women">
                Women
              </Link>
            </li>
            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/men">
                Men
              </Link>
            </li>
            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/kids">
                Kontackt
              </Link>
            </li>
            <li className={styles["header-nav-item"]}>
              <Link className={styles.Link} to="/kids">
                Kids
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles["shopping-cart"]}>
          <div className={styles["shopping-cart-icon"]}>
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
          </div>
          <div className={styles["log-in-out-btn"]}>
            <span> Log out </span>
          </div>
        </div>
      </header>
    </>
  );

  return (
    <>
      {header}
      <Outlet />
    </>
  );
}
