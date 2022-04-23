import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

/* -------------------------------------------------- */

//packages


/* -------------------------------------------------- */

//styles

import styles from "components/CardContainer/CardContainer.module.css";

/* -------------------------------------------------- */

//components

import Card from "components/Card/Card.jsx";

/* -------------------------------------------------- */

//api

import { getPaginatedMovies } from "services/api/movies";


/* -------------------------------------------------- */

const CardContainer = () => {


    const mainRef = useRef(null);

    const [movies, setMovies] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);

    const [scrollPosition, setScrollPosition] = useState(null);

    useEffect(() => {

        getPaginatedMovies(1).then(res => setMovies(res.data.data));


    }, []);


    mainRef?.current?.addEventListener("scroll", (e) => {
        setScrollPosition(mainRef.current.offsetWidth - mainRef.current.scrollLeft);
    })

    useEffect(() => {

        if (currentPage === 1) {
            // mainRef.current.scrollY >= (mainRef.current.offsetWidth * 0.8) && getPaginatedMovies(2).then(res => console.log(res));
            // setCurrentPage(2);
            console.log(scrollPosition, (mainRef.current.offsetWidth * 0.8))
        }

        // else {
        //     setCurrentPage(Math.ceil(scrollPosition / (mainRef.current.offsetWidth * 0.8)))
        // }

    }, [scrollPosition]);


    return (
        <main className={styles.main} ref={mainRef}>


            {
                console.log(scrollPosition)
            }

            {
                movies.map(movie => (
                    <Card key={movie.id} title={movie.fa_title} duration={movie.duration} imageUrl={movie.main_poster_url} />
                ))
            }


        </main>
    )

}

export default CardContainer;