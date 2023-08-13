import { useSelector } from 'react-redux';
import { Parser } from 'html-to-react';
import {
  ContainerDetail,
  TopSection,
  BottomSection,
  ImageContainer,
  Image,
  TextContainer,
  Title1,
  StyledP,
} from '../StyledComponent/StyledGameDetail';

const GameDetail = () => {
  const game = useSelector((state) => state.game);
  // console.log(game);
  const htmlToReactParser = new Parser();
  const { description } = game;
  const reactDescription = htmlToReactParser.parse(description);

  return (
    <ContainerDetail>
      <TopSection>
        <ImageContainer>
          <Image src={game.image} alt={game.name} />
        </ImageContainer>
        <TextContainer>
          <Title1>{game.name}</Title1>
          <div>{reactDescription}</div>
        </TextContainer>
      </TopSection>
      <BottomSection>
        <div>
          <StyledP>Platforms: </StyledP>
          {game.platforms}
        </div>
        <div>
          <StyledP>Release Date: </StyledP>
          {game.releaseDate}
        </div>
        <div>
          <StyledP>Rating: </StyledP>
          {game.rating}
        </div>
        <div>
          <StyledP>Genres: </StyledP>
          {game.genres}
        </div>
      </BottomSection>
    </ContainerDetail>
  );
};

export default GameDetail;
