function timeConverter(time) {

    const hour = Math.floor(time / 60);
    const minute = Math.floor((time % 60));
    const second = Math.floor((time % 60) % 60);

    return minute > 9 ? `0${hour}:${minute}:00` : `0${hour}:0${minute}:00`


}

export default timeConverter;