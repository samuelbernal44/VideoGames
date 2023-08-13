import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGames } from '../../redux/actions';
import GameList from '../../components/GameList/GameList';
import FilterButton from '../../components/FilterButton/FilterButton';

function HomePage() {
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedOrigin, setSelectedOrigin] = useState('All');
  const [sortCriteria, setSortCriteria] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');
  const games = useSelector((state) => state.games);

  useEffect(() => {
    dispatch(getGames());
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
  };
  const handleOriginChange = (origin) => {
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
    <div>
      <FilterButton
        onFilterChange={handleFilterChange}
        onOriginChange={handleOriginChange}
        onSortName={handleNameSortChange}
        onSortRating={handleRatingSortChange}
      />
      <GameList games={filteredGames} />
    </div>
  );
}

export default HomePage;
