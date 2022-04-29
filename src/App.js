/* -------------------------------------------------- */


import React, { useEffect, useState } from "react";


/* -------------------------------------------------- */

//styles

import styles from 'App.module.css';

/* -------------------------------------------------- */

//components

import Header from "components/Header/Header.jsx";
import CardContainer from "components/CardContainer/CardContainer.jsx";
import Modal from "components/Modal/Modal.jsx";
import Warning from "components/Warning/Warning.jsx";
import ShowFavorite from "components/ShowFavorite/ShowFavorite.jsx"

/* -------------------------------------------------- */


function App() {

  const [cardFavorite, setCardFavorite] = useState([]);

  const [isShowFavoriteBox, setIsShowFavoriteBox] = useState(false);

  const [movieSelected, setMovieSelected] = useState({
    id: null,
    image: null,
    title: null,
    open: false,
    rankSelected: ""
  });

  return (

    <div className={styles.container}>

      <Warning />

      {
        isShowFavoriteBox && <ShowFavorite cardFavorite={cardFavorite} setCardFavorite={setCardFavorite} isShowFavoriteBox={isShowFavoriteBox} setIsShowFavoriteBox={setIsShowFavoriteBox} />
      }

      {
        movieSelected.open && <Modal movieSelected={movieSelected} setMovieSelected={setMovieSelected} cardFavorite={cardFavorite} setCardFavorite={setCardFavorite} />
      }

      <Header isShowFavoriteBox={isShowFavoriteBox} setIsShowFavoriteBox={setIsShowFavoriteBox} cardFavorite={cardFavorite} setCardFavorite={setCardFavorite} />

      <CardContainer movieSelected={movieSelected} setMovieSelected={setMovieSelected} />

    </div>

  );
}

export default App;
