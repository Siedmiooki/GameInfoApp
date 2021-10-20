import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetails } from "../actions/detailsAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";
import { ZoomIn } from "@styled-icons/bootstrap/ZoomIn";


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
                <ShadowStyled>
                    <ZoomInStyled />
                </ShadowStyled>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    );
};

const StyledGame = styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
max-width: 100%;
background: #eeebeb;
position: relative;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
    p {
        font-size: 1rem
    }
    @media ( max-width: 1300px ) {
        padding: 0rem;
        border-radius: 1.5rem;
        margin-bottom: 1rem
    }
`

const ShadowStyled = styled(motion.div)`
position: absolute;
background: #29e2e2;
display: flex;
align-items: center;
justify-content: center;
opacity: 0;
width: 100%;
height: 40vh;
transition: 1s;
:hover {
    opacity: 0.4;
}
`

const ZoomInStyled = styled(ZoomIn)`
width: 16rem;
height: 16rem;
color: #eeebeb;
`

export default Game;