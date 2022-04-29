/* -------------------------------------------------- */


import React, { useEffect, useState } from "react";


/* -------------------------------------------------- */

//styles

import styles from 'components/ShowFavorite/ShowFavorite.module.css';

/* -------------------------------------------------- */

//icons

import close from "assets/icons/close.svg";

/* -------------------------------------------------- */

//components

import Card from "components/Card/Card";

/* -------------------------------------------------- */


function ShowFavorite({ isShowFavoriteBox, setIsShowFavoriteBox, cardFavorite, setCardFavorite }) {


    const closeFunc = () => {
        setIsShowFavoriteBox(false)
    }

    const removeItem = (id) => {
        setCardFavorite(cardFavorite.filter(item => item.id !== id));
        if (cardFavorite.length === 1) {
            setIsShowFavoriteBox(false)
        }
    }

    return (
        <div className={styles.modal}>
            <div className={styles.box}>
                <img className={styles.close} onClick={closeFunc} src={close} alt="closeLogo" />

                <ul>

                    {
                        cardFavorite.length !== 0 ?
                            cardFavorite.map(item => (
                                <div className={styles.card}>

                                    <div className={styles.removeItem}>
                                        <button onClick={() => removeItem(item.id)}>حذف</button>
                                    </div>

                                    <img src={item.image} alt="Logo" />

                                    <div className={styles.title}>
                                        <h2>{item.title}</h2>
                                    </div>

                                </div>
                            ))
                            :
                            <h1 style={{ color: "#fff" }}>آیتمی برای نمایش وجود ندارد</h1>
                    }

                </ul>

            </div>
        </div>
    )
}

export default ShowFavorite;