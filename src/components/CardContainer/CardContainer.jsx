/* -------------------------------------------------- */

import React, { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";

/* -------------------------------------------------- */

//hooks

import useMovieSearch from "hooks/useMovieSearch.js"

/* -------------------------------------------------- */

//styles

import styles from "components/CardContainer/CardContainer.module.css";

/* -------------------------------------------------- */

//components

import Card from "components/Card/Card.jsx";

/* -------------------------------------------------- */

const CardContainer = ({ movieSelected, setMovieSelected }) => {



    const [pageNumber, setPageNumber] = useState(1);

    const { loading, error, movies, hasMore } = useMovieSearch(pageNumber);



    const observer = useRef()
    const lastMovieElementRef = useCallback((node) => {
        if (loading) return

        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })

        if (node) observer.current.observe(node)
    }, [loading, hasMore])

    return (
        <main className={styles.main}>

            {
                movies.map((movie, index) => {
                    if (movies.length <= index + 1) {
                        return <Card setMovieSelected={setMovieSelected} key={movie.id} id={movie.id} title={movie.fa_title} reff={lastMovieElementRef} duration={movie.duration} imageUrl={movie.main_poster_url} />
                    } else {
                        return <Card setMovieSelected={setMovieSelected} key={movie.id} id={movie.id} title={movie.fa_title} duration={movie.duration} imageUrl={movie.main_poster_url} />
                    }
                })
            }

            <h2 className={styles.loading}>{loading && "... Loading"}</h2>
            <h2 className={styles.error}>{error && "Error"}</h2>

        </main>
    )

}

export default CardContainer;