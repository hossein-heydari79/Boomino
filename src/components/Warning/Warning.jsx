/* -------------------------------------------------- */

//packages

import React from "react";

/* -------------------------------------------------- */

//styles

import styles from "components/Warning/Warning.module.css";

/* -------------------------------------------------- */

function Warning() {
    return (
        <div className={styles.modal}>

            <div className={styles.box}>
                <h2 className={styles.boxTitle}>این صفحه در موبایل قابل مشاهده نیست</h2>
            </div>

        </div>
    )
}


export default Warning;