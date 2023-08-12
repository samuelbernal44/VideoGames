/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { useState } from 'react';
import GameCard from '../GameCard/GameCard';
import ContainerList from '../StyledComponent/StyledGameList';

const ITEMS_PER_PAGE = 15;

function GameList() {
  const [currentPage, setCurrentPage] = useState(0);
  const games = useSelector((state) => state.games);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(games.length / ITEMS_PER_PAGE);

  // Obtener los juegos para la página actual
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentGames = games.slice(startIndex, endIndex);

  // Manejadores para cambiar de página
  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <ContainerList>
      {currentGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
      <>
        <button onClick={handlePrevPage}>Anterior</button>
        <p>
          Página {currentPage + 1} de {totalPages}
        </p>
        <button onClick={handleNextPage}>Siguiente</button>
      </>
    </ContainerList>
  );
}

export default GameList;
