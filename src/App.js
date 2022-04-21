/* -------------------------------------------------- */

//styles

import styles from 'App.module.css';

/* -------------------------------------------------- */

//components

import Header from "components/Header/Header.jsx";

/* -------------------------------------------------- */

function App() {
  return (

    <div class={styles.container}>

      <Header />

      <main className={styles.main}>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>


        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>

      </main>

    </div>

  );
}

export default App;
