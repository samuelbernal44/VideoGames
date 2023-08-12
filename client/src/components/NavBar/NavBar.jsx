import { Link } from 'react-router-dom';
import axios from 'axios';
import ContainerNavBar from '../StyledComponent/StyledNavBar';
import SearchBar from '../../components/SearchBar/SearchBar';

const NavBar = ({ onSearch }) => {
  const handleSearch = async (name) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/videogame/name?name=${name}`
      );
      onSearch(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ContainerNavBar>
      <Link to="/home">Home</Link>
      <Link to="/create">Form</Link>
      <SearchBar onSearch={handleSearch} />
    </ContainerNavBar>
  );
};

export default NavBar;
