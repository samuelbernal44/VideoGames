import { connect } from 'react-redux';
import { useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import ContainerList from '../../components/StyledComponent/StyledGameList';

const ITEMS_PER_PAGE = 15;

// eslint-disable-next-line react-refresh/only-export-components
function SearchResults({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(0);

  const games = searchResults;

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

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(SearchResults);
