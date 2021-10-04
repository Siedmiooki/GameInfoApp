import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../util";
import apple from "../img/apple.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png"

const GameDetail = ({ pathId }) => {
    const { screen, game, isLoading } = useSelector((state) => state.details)
    const history = useHistory()
    const exitDetailsHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto"
            history.push("/")
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.round(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull}></img>)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty}></img>)
            }
        } return stars
    }

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            case "PlayStation 5":
                return playstation;
            case "Xbox Series S/X":
                return xbox;
            case "Xbox S":
                return xbox;
            default:
                return gamepad
        }
    }

    return (
        <>
            {!isLoading && (
                <StyledCardShadow className="shadow" onClick={exitDetailsHandler}>
                    <StyledDetail layoutId={pathId}>
                <StyledStats>
                    <div className="rating">
                                <h3>{game.name}</h3>
                                <StyledStars>
                        <p>Rating: {game.rating}</p>
                                {getStars()}
                                </StyledStars>
                    </div>
                    <StyledInfo>
                        <h3>Platforms</h3>
                        <StyledPlatforms>
                            {game.platforms.map(data => (
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} title={data.platform.name} alt={data.platform.name}></img>
                            ))}
                        </StyledPlatforms>
                    </StyledInfo>
                </StyledStats>
                <StyledMedia>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                </StyledMedia>
                <StyledDescription>
                    <p>{game.description_raw}</p>
                </StyledDescription>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img src={smallImage(screen.image, 1280)} alt={screen.image} key={screen.id} />
                    ))}
                </div>
            </StyledDetail>
        </StyledCardShadow>
            )}
        </>
    );
}

const StyledStars = styled(motion.div)`
@media (max-width: 1300px) {
    text-align: center;
}
p {
    @media (max-width: 1300px) {
    font-size: 1rem;
}
}
`

const StyledCardShadow = styled(motion.div)`
    z-index: 10;
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: darkgrey
    }
    &::-webkit-scrollbar-track {
        background-color: white
    }
`
const StyledDetail = styled(motion.div)`
z-index: 5;
width: 80%;
border-radius: 1rem;
padding: 2rem 4rem;
background: white;
position: absolute;
left: 10%;
color: black;
@media ( max-width: 1300px ) {
    border-radius: 0rem;
    padding: 0rem;
    left: 5%;
    width: 90%;
}
img {
    width: 100%;
}
`
const StyledStats = styled(motion.div)`
display: flex;
align-items: center;
justify-content: space-between;

@media ( max-width: 1300px ) {
display: list-item;
align-items: center;
}
img {
    width: 2rem;
    height: 2rem;
    display: inline;
    @media ( max-width: 1300px ) {
        align-items: center;
}
}
h3 {
    @media ( max-width: 1300px ) {
        text-align: center;
}
p {

}
}
`
const StyledInfo = styled(motion.div)`
text-align: center
`
const StyledPlatforms = styled(motion.div)`
display: flex;
justify-content: space-evenly;
@media ( max-width: 1300px ) {
    justify-content: center;
}
img {
    margin-left: 3rem;
    cursor: pointer;
    @media ( max-width: 1300px ) {
        margin-left: 1rem;
        width: 1.5rem;
        height: 1.5rem;
}
}
`
const StyledMedia = styled(motion.div)`
margin-top: 5rem;
img {
    width: 100%;
}
`
const StyledDescription = styled(motion.div)`
margin: 5rem 0rem;
@media ( max-width: 1300px ) {
    margin: 1rem 0rem;
    p {
        font-size: 0.8rem;
        padding: 0rem 0.5rem;
    }
    }
`

export default GameDetail;