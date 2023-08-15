/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const storedGenre = localStorage.getItem('selectedGenre');
    if (storedGenre) {
      setSelectedGenre(storedGenre);
    }
    const storedOrigin = localStorage.getItem('selectedOrigin');
    if (storedOrigin) {
      setSelectedOrigin(storedOrigin);
    }
    const storedSortCriteria = localStorage.getItem('sortCriteria');
    if (storedSortCriteria) {
      setSortCriteria(storedSortCriteria);
    }
    const storedSortDirection = localStorage.getItem('sortDirection');
    if (storedSortDirection) {
      setSortDirection(storedSortDirection);
    }
    const storedPage = localStorage.getItem('currentPage');
    if (storedPage) {
      setCurrentPage(Number(storedPage));
    }
  }, []);

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
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      localStorage.setItem('currentPage', newPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      localStorage.setItem('currentPage', newPage);
    }
  };

  // Controladores para actualizar el género, el origen y el criterio de ordenamiento seleccionados
  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
    localStorage.setItem('selectedGenre', genre);
  };
  const handleOriginChange = (origin) => {
    setSelectedOrigin(origin);
    localStorage.setItem('selectedOrigin', origin);
  };

  const handleNameSortChange = (event) => {
    setSortCriteria('name');
    setSortDirection(event);
    localStorage.setItem('sortCriteria', 'name');
    localStorage.setItem('sortDirection', event);
  };

  const handleRatingSortChange = (event) => {
    setSortCriteria('rating');
    setSortDirection(event);
    localStorage.setItem('sortCriteria', 'rating');
    localStorage.setItem('sortDirection', event);
  };

  return (
    <>
      <FilterButton
        onFilterChange={handleFilterChange}
        onOriginChange={handleOriginChange}
        onSortName={handleNameSortChange}
        onSortRating={handleRatingSortChange}
        selectedGenre={selectedGenre}
        selectedOrigin={selectedOrigin}
        sortCriteria={sortCriteria}
        sortDirection={sortDirection}
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
