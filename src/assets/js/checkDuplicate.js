const checkDuplicate = (duplicate, cardFavorite, movieSelected, setMovieSelected) => {

    duplicate = [];
    cardFavorite?.forEach(item => {
        if (item.id === movieSelected.id) {
            duplicate.push(true);
        }
        else {
            duplicate.push(false);
        }
    })

    if (duplicate.includes(true)) {
        setMovieSelected({
            ...movieSelected,
            rankSelected: "much"
        })
    }


    return duplicate;

}

export default checkDuplicate;