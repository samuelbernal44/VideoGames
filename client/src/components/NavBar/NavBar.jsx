/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import axios from 'axios';
import ContainerNavBar from '../StyledComponent/StyledNavBar';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button } from '../StyledComponent/StyledSearchBar';

const NavBar = ({ onSearch }) => {
  const handleSearch = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogame/name?name=${name}`
      );
      onSearch(response.data);
    } catch (error) {
      // Mostrar un mensaje de alerta al usuario
      alert(
        'Ocurrió un error al realizar la búsqueda. Por favor, inténtalo de nuevo.'
      );
    }
  };
  return (
    <ContainerNavBar>
      <Link to="/home">
        <Button>Home</Button>
      </Link>
      <Link to="/create">
        <Button>Form</Button>
      </Link>
      <SearchBar onSearch={handleSearch} />
    </ContainerNavBar>
  );
};

export default NavBar;
