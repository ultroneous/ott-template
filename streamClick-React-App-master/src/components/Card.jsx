import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./styles/components/card.css";
import "./styles/components/responsive/responsive.css";

function MovieCard(props) {
  return (
    <Container className="cardCenter">
      <Card className="cardBox">
        <div className="firstPart">
          <Card.Img className="cardImage" variant="top" src={props.mainImage} />
          <div className="ottLogo">
            <img src={props.ottLogo} alt="Netflix Logo" />
          </div>
        </div>
        <Card.Body className="cardBody">
          <Card.Title className="titleImage">
            <img src={props.movieLogo} alt={props.movieAltName} />
            {/* <img src="../../cardTitle.png" /> */}
            <Button variant="light" className="playButton">
              <img src="../../icons/playIcon.png" alt="Play Icon" />
              <h6>Play Now</h6>
            </Button>
          </Card.Title>
          <Card.Text className="movieFeatures">
            <span>{props.seasonNumber}</span>
            <span>{props.movieCategory}</span>
            <span className="whiteText">IMDb Rating</span>
            <span>
              <img src="../../icons/ratingMovie.png" alt="Movie Rating" />
              {props.IMDBRating}
            </span>
          </Card.Text>
          <Card.Text className="cardSummary">{props.movieSumary}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MovieCard;
