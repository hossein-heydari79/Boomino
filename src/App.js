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

/* -------------------------------------------------- */


function App() {

  const [movieSelected, setMovieSelected] = useState({
    image: null,
    title: null,
    open: false,
    rankSelected: ""
  });

  return (

    <div className={styles.container}>
      <Warning />

      {
        movieSelected.open && <Modal movieSelected={movieSelected} setMovieSelected={setMovieSelected} />
      }

      <Header />

      <CardContainer movieSelected={movieSelected} setMovieSelected={setMovieSelected} />

    </div>

  );
}

export default App;
