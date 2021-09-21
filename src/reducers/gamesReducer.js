const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
    searchedGames: [],
}

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popularGames: action.payload.popular, upcomingGames: action.payload.upcoming, newGames: action.payload.new }
        default:
            return { ...state }
    }
}

export default gamesReducer