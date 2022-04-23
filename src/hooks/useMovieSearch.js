import { useState, useEffect } from 'react'
import axios from "axios"

const useMovieSearch = (pageNumber) => {


    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [movies, setMovies] = useState([])
    const [hasMore, setHasMore] = useState(false)

    useEffect(() => {
        let cancel;

        setLoading(true);
        setError(false);

        axios({
            method: "GET",
            url: "https://vodapi.boomino.ir/content/fake-list",
            params: { page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setMovies(prevMovies => {
                return [...new Set([...prevMovies, ...res.data.data])]
            })
            setHasMore(res.data.data.length > 0)
            setLoading(false)
        }).catch(err => {
            if (axios.isCancel(err)) return
            setError(true)
        })

        return () => cancel()

    }, [pageNumber])


    return { loading, error, movies, hasMore }


}

export default useMovieSearch