import styles from "components/Modal/Modal.module.css";
import dislike from "assets/icons/dislike.svg";
import like from "assets/icons/like.svg";
import close from "assets/icons/close.svg";


const Modal = ({ movieSelected, setMovieSelected }) => {


    const closeFunc = () => {
        setMovieSelected({
            ...movieSelected,
            open: false
        })
    }

    const rankSelectedFunc = (rank) => {
        setMovieSelected({
            ...movieSelected,
            rankSelected: rank
        })
    }

    return (
        <div className={styles.modal}>
            <div className={styles.box}>

                <img className={styles.close} onClick={closeFunc} src={close} alt="closeLogo" />

                <div className={styles.pic}>
                    <img src={movieSelected.image} alt="Logo" />
                </div>

                <h2 className={styles.boxTitle}>
                    انیمیشن {movieSelected.title} رو چقدر دوست داشتی؟
                </h2>
                <div className={styles.imageBox}>
                    <div className={styles.likeBox}>
                        <img src={like} onClick={() => rankSelectedFunc("much")} alt="likeLogo" />
                        <h2 style={{ color: movieSelected.rankSelected == "much" ? "rgb(0, 230, 0)" : "#FFFFFF" }} className={styles.much}>زیاد</h2>
                    </div>
                    <div className={styles.dislikeBox}>
                        <img src={dislike} onClick={() => rankSelectedFunc("low")} alt="dislikeLogo" />
                        <h2 style={{ color: movieSelected.rankSelected == "low" ? "rgb(255, 58, 58)" : "#FFFFFF" }} className={styles.low}>کم</h2>
                    </div>
                </div>

                <button onClick={closeFunc} disabled={!movieSelected.rankSelected} className={styles.btnSubmit}>همینه</button>

            </div>
        </div >
    )
}

export default Modal;