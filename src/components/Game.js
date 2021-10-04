import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";


const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailsHandler = () => {
        document.body.style.overflow = "hidden"
        dispatch(loadDetails(id))
    }


    return (
        <StyledGame layoutId={stringPathId} onClick={loadDetailsHandler} variants={popUp} initial="hidden" animate="show">
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
z-index: 1;
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover
    }
    p {
        font-size: 1rem
    }
`

export default Game;