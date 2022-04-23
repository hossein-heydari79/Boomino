import axios from "services/api/index";

export const getPaginatedMovies = (pageNumber) => {
    return axios.get("/content/fake-list", {
        params: {
            page: pageNumber
        }
    })
}

