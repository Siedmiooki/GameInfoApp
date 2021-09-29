const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: [],
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popularGames: action.payload.popular, upcomingGames: action.payload.upcoming, newGames: action.payload.new };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searchedGames: action.payload.searchedGames,
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedGames: [],
            }
        default:
            return { ...state }
    }
}

export default gamesReducer