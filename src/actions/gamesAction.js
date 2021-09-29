import axios from "axios";
import { popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL } from "../api";

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newData = await axios.get(newGamesURL());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            new: newData.data.results
        }
    })
}

export const fetchSearched = (game_name) => async (dispatch) => {
    const searchedGames = await axios.get(searchGameURL(game_name));
    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searchedGames: searchedGames.data.results
        }
    })
}