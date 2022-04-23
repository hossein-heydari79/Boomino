import Img from "assets/images/img.jpg";

//styles

import styles from "components/Card/Card.module.css";

/* -------------------------------------------------- */

const Card = ({ title, duration, imageUrl }) => {
    return (
        <div className={styles.card}>
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