import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../redux/actions';
import GameList from '../../components/GameList/GameList';
import FilterButton from '../../components/FilterButton/FilterButton';

function HomePage() {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGames());
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
  }, [dispatch]);

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
    filteredGames = filteredGames.filter((game) => !game.created);
  } else if (selectedOrigin === 'Database') {
    filteredGames = filteredGames.filter((game) => game.created);
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

  // Controladores para actualizar el género, el origen y el criterio de ordenamiento seleccionados
  const handleFilterChange = (genre) => {
    setSelectedGenre(genre);
    localStorage.setItem('selectedGenre', genre);
    setCurrentPage(0);
  };
  const handleOriginChange = (origin) => {
    setSelectedOrigin(origin);
    localStorage.setItem('selectedOrigin', origin);
    setCurrentPage(0);
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
    <div>
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
      <GameList
        games={filteredGames}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default HomePage;
