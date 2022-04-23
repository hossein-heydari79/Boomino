import React, { useEffect, useState } from "react";


/* -------------------------------------------------- */

//styles

import styles from 'App.module.css';

/* -------------------------------------------------- */

//components

import Header from "components/Header/Header.jsx";
import Card from "components/Card/Card.jsx";
import CardContainer from "components/CardContainer/CardContainer.jsx";

/* -------------------------------------------------- */


function App() {

  return (

    <div className={styles.container}>

      <Header />

      <CardContainer />

    </div>

  );
}

export default App;
