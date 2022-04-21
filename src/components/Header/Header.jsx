/* -------------------------------------------------- */

//packages

import React from "react";

/* -------------------------------------------------- */

//icons

import BackIcon from "assets/icons/back.svg";
import SearchIcon from "assets/icons/search.svg"

/* -------------------------------------------------- */

//styles

import styles from "components/Header/Header.module.css";

/* -------------------------------------------------- */


const Header = () => {

    return (
        <header className={styles.header}>

            <div className={styles.icon}>
                <h2>Avatar</h2>
            </div>

            <div className={styles.buttonGroup}>

                <div className={styles.searchIcon}>
                    <img src={SearchIcon} alt="searchIcon" />
                </div>

                <div className={styles.backIcon}>
                    <img src={BackIcon} alt="backIcon" />
                </div>

            </div>

        </header>
    )

}

export default Header;
