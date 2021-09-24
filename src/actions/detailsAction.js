import axios from "axios";
import { gameDetailsURL, gameScreenshotURL } from "../api";

export const loadDetails = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAILS"
    })

    const detailsData = await axios.get(gameDetailsURL(id))
    const screenshotData = await axios.get(gameScreenshotURL(id))
    dispatch({
        type: "GET_DETAILS",
        payload: {
            game: detailsData.data,
            screen: screenshotData.data,
        }
    })
}
