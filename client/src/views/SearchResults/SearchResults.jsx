/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useState } from 'react';
import GameCard from '../../components/GameCard/GameCard';
import {
  ContainerList,
  PaginationContainer,
  PaginationButton,
  PaginationText,
} from '../../components/StyledComponent/StyledGameList';
import FilterButton from '../../components/FilterButton/FilterButton';

const ITEMS_PER_PAGE = 15;

// eslint-disable-next-line react-refresh/only-export-components
function SearchResults({ searchResults }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const games = searchResults;

  // Filtrar juegos por género
  let filteredGames;
  if (selectedGenre === 'All') {
    filteredGames = games;
  } else {
    filteredGames = games.filter((game) =>
      game.genres.split(',').some((genre) => genre.trim() === selectedGenre)
    );
  }

  // Filtrar juegos por origen
  if (selectedOrigin === 'API') {
    filteredGames = games.filter((game) => !game.created);
    console.log(filteredGames);
  } else if (selectedOrigin === 'Database') {
    filteredGames = games.filter((game) => game.created);
  }

  // Ordenar juegos
  filteredGames.sort((a, b) => {
    let result;
    if (sortCriteria === 'name') {
      result = a.name.localeCompare(b.name);
    } else if (sortCriteria === 'rating') {
      result = a.rating - b.rating;
    }
    return sortDirection === 'asc' ? result : -result;
  });

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredGames.length / ITEMS_PER_PAGE);

  // Obtener los juegos para la página actual
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentGames = filteredGames.slice(startIndex, endIndex);

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

  // Controladores para actualizar el género, el origen y el criterio de ordenamiento seleccionados
  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
  };
  const handleOriginChange = (origin) => {
    // console.log(origin);
    setSelectedOrigin(origin);
  };

  const handleNameSortChange = (event) => {
    setSortCriteria('name');
    setSortDirection(event);
  };

  const handleRatingSortChange = (event) => {
    setSortCriteria('rating');
    setSortDirection(event);
  };

  return (
    <>
      <FilterButton
        onFilterChange={handleFilterChange}
        onOriginChange={handleOriginChange}
        onSortName={handleNameSortChange}
        onSortRating={handleRatingSortChange}
      />
      <ContainerList>
        {currentGames.map((game) => (
          <GameCard key={game.id} game={game} />
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

const mapStateToProps = (state) => ({
  searchResults: state.searchResults,
});

// eslint-disable-next-line react-refresh/only-export-components
export default connect(mapStateToProps)(SearchResults);
