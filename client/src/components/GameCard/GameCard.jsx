/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {
  ContainerCard,
  ContainerGenres,
  GridGenres,
  Image,
  ItemsGenres,
  StyledP,
  Title2,
} from '../StyledComponent/StyledGameCard';

function GameCard({ game }) {
  const genres = game.genres.split(',');
  return (
    <ContainerCard>
      <Title2>{game.name}</Title2>
      <Link to={`/detail/${game.id}`}>
        <Image src={game.image} alt={game.name} />
      </Link>
      <ContainerGenres>
        <StyledP>Genres</StyledP>
        <GridGenres>
          {genres.map((genre) => (
            <ItemsGenres key={genre}>{genre}</ItemsGenres>
          ))}
        </GridGenres>
        <span>
          <StyledP>Rating </StyledP>
          {game.rating}
        </span>
      </ContainerGenres>
    </ContainerCard>
  );
}

export default GameCard;
