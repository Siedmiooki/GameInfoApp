import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction"
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";


const Home = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    const { popularGames, newGames, upcomingGames } = useSelector(state => state.games)

    return (
        <StyledGameList>
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
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
            </AnimateSharedLayout>
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