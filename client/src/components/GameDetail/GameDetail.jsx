import { useSelector } from 'react-redux';
import { Parser } from 'html-to-react';

const GameDetail = () => {
  const game = useSelector((state) => state.game);
  console.log(game);
  const htmlToReactParser = new Parser();
  const { description } = game;
  const reactDescription = htmlToReactParser.parse(description);
  return (
    <>
      <div>{game.name}</div>
      <img src={game.image} alt={game.name} />
      <div>{reactDescription}</div>
      <div>{game.platforms}</div>
      <div>{game.releaseDate}</div>
      <div>{game.rating}</div>
      <div>{game.genres}</div>
    </>
  );
};

export default GameDetail;
