import { useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction"
import Game from "../components/Game";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";


const Home = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const pathId = location.pathname.split("/")[2]

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    const { popularGames, newGames, upcomingGames, searchedGames } = useSelector(state => state.games)

    return (
        <StyledGameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>
                {searchedGames.length ? (
                    <div className="searched">
                        <h2>Searched Games</h2>
                        <StyledGames>
                            {searchedGames.map((game) => (
                                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                            ))}
                        </StyledGames>
                    </div>
                ) : null}
                <h2>Popular Games</h2>
            <StyledGames>
                    {popularGames.map((game) => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
                ))}
            </StyledGames>
                <h2>Upcoming Games</h2>
            <StyledGames>
                    {upcomingGames.map((game) => (
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
    z-index: 1;
    h2 {
        text-align: center;
        padding: 5rem 0rem;
    }
    @media ( max-width: 1300px ) {
    padding: 1rem 0rem;
    }
`

const StyledGames = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    @media ( max-width: 1300px ) {
    display: list-item;
    grid-row-gap: 5rem;
    }
`

export default Home;