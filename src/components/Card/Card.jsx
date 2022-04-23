//styles

import styles from "components/Card/Card.module.css";

/* -------------------------------------------------- */

const Card = ({ title, duration, imageUrl, reff = null }) => {
    return (
        <div className={styles.card} ref={reff}>
            <img src={imageUrl} alt="Logo" />

            <div className={styles.time}>
                <h2>{duration}</h2>
            </div>
            <div className={styles.title}>
                <h2>{title}</h2>
            </div>

        </div>
    )
}

export default Card;