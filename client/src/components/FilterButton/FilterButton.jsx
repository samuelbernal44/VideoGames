/* eslint-disable react/prop-types */
import {
  FilterContainer,
  FilterLabel,
  FilterSelect,
} from '../StyledComponent/StyledFilterButton';

function FilterButton({
  onFilterChange,
  onOriginChange,
  onSortName,
  onSortRating,
  selectedGenre,
  selectedOrigin,
  sortCriteria,
  sortDirection,
}) {
  const handleFilterChange = (event) => {
    onFilterChange(event.target.value);
    console.log(event.target.value);
  };
  const handleOriginChange = (event) => {
    onOriginChange(event.target.value);
  };

  const handleNameSortChange = (event) => {
    onSortName(event.target.value);
  };

  const handleRatingSortChange = (event) => {
    onSortRating(event.target.value);
  };

  return (
    <FilterContainer>
      <FilterLabel>
        Género:
        <FilterSelect
          name="genre"
          onChange={handleFilterChange}
          value={selectedGenre}
        >
          <option value="All">Todos</option>
          <option value="Action">Action</option>
          <option value="Indie">Indie</option>
          <option value="Adventure">Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategy">Strategy</option>
          <option value="Shooter">Shooter</option>
          <option value="Casual">Casual</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
          <option value="Arcade">Arcade</option>
          <option value="Platformer">Platformer</option>
          <option value="Massively Multiplayer">Massively Multiplayer</option>
          <option value="Racing">Racing</option>
          <option value="Sports">Sports</option>
          <option value="Fighting">Fighting</option>
          <option value="Family">Family</option>
          <option value="Board Games">Board Games</option>
          <option value="Educational">Educational</option>
          <option value="Card">Card</option>
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Origen:
        <FilterSelect
          name="origin"
          onChange={handleOriginChange}
          value={selectedOrigin}
        >
          <option value="All">Todos</option>
          <option value="API">API</option>
          <option value="Database">Base de datos</option>
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Ordenar por nombre:
        <FilterSelect
          onChange={handleNameSortChange}
          value={sortCriteria === 'name' ? sortDirection : ''}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </FilterSelect>
      </FilterLabel>
      <FilterLabel>
        Ordenar por rating:
        <FilterSelect
          onChange={handleRatingSortChange}
          value={sortCriteria === 'rating' ? sortDirection : ''}
        >
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </FilterSelect>
      </FilterLabel>
    </FilterContainer>
  );
}

export default FilterButton;
