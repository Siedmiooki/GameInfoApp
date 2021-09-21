import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction"
import Game from "../components/Game";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    const { popularGames, newGames, upcomingGames } = useSelector(state => state.games)

    return (
        <StyledGameList>
            <h2>Upcoming Games</h2>
            <StyledGames>
                {upcomingGames.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </StyledGames>
            <h2>Popular Games</h2>
            <StyledGames>
                {popularGames.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </StyledGames>
            <h2>New Games</h2>
            <StyledGames>
                {newGames.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </StyledGames>
        </StyledGameList>
    );
}

const StyledGameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem
`

export default Home;