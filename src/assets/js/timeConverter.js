function timeConverter(time) {

    const h = Math.floor(time / 60);
    const m = Math.floor((time % 60));
    const s = Math.floor((time % 60) % 60);

    return m > 9 ? `0${h}:${m}:00` : `0${h}:0${m}:00`


}

export default timeConverter;