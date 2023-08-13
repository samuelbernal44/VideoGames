/* eslint-disable react/prop-types */
import { useState } from 'react';
import GameCard from '../GameCard/GameCard';
import {
  ContainerList,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from '../StyledComponent/StyledGameList';

const ITEMS_PER_PAGE = 15;

function GameList({ games }) {
  const [currentPage, setCurrentPage] = useState(0);

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
    <>
      <ContainerList>
        {currentGames.map((game) => (
          <GameCard key={game.create ? `db-${game.id}` : game.id} game={game} />
        ))}
      </ContainerList>
      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage}>Anterior</PaginationButton>
        <PaginationText>
          Página {currentPage + 1} de {totalPages}
        </PaginationText>
        <PaginationButton onClick={handleNextPage}>Siguiente</PaginationButton>
      </PaginationContainer>
    </>
  );
}

export default GameList;
