/* -------------------------------------------------- */

//styles

import styles from "components/Card/Card.module.css";

/* -------------------------------------------------- */

//pureJs

import timeConverter from "assets/js/timeConverter.js";

/* -------------------------------------------------- */

const Card = ({ title, duration, imageUrl, reff = null, setMovieSelected, id }) => {

    const movieSelect = () => {
        setMovieSelected({
            id,
            image: imageUrl,
            title,
            open: true,
            rankSelected: ""
        })
    }


    return (
        <div className={styles.card} ref={reff} onClick={movieSelect}>
            <img src={imageUrl} alt="Logo" />

            <div className={styles.time}>
                <h2>{timeConverter(duration)}</h2>
            </div>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>

        </div>
    )
}

export default Card;