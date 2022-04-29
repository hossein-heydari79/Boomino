/* -------------------------------------------------- */

//packages

import React from "react";

/* -------------------------------------------------- */

//icons

import { MdFavorite } from "react-icons/md";

/* -------------------------------------------------- */

//icons

import BackIcon from "assets/icons/back.svg";
import SearchIcon from "assets/icons/search.svg"

/* -------------------------------------------------- */

//styles

import styles from "components/Header/Header.module.css";

/* -------------------------------------------------- */


const Header = ({ cardFavorite, setCardFavorite, isShowFavoriteBox, setIsShowFavoriteBox }) => {


    const isShowModal = () => {
        setIsShowFavoriteBox(true)
    }


    return (
        <header className={styles.header}>


            <div className={styles.buttonGroup}>

                <div className={styles.backIcon}>
                    <img src={BackIcon} alt="backIcon" />
                </div>

                <div className={styles.searchIcon}>
                    <img src={SearchIcon} alt="searchIcon" />
                </div>

                <div className={styles.favorite} onClick={isShowModal}>
                    <h2 className={styles.favoriteCount}>{cardFavorite.length}</h2>
                    <MdFavorite className={styles.favoriteIcon} size={50} />
                </div>

            </div>

            <div className={styles.icon}>
                <h2>Hossein</h2>
            </div>

        </header>
    )

}

export default Header;
