/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import { connect } from 'react-redux';
import { searchByName } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';
import {
  Input,
  ContainerSearchBar,
  Button,
} from '../StyledComponent/StyledSearchBar';

function SearchBar({ searchByName }) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    searchByName(name);
    navigate('/home/name');
    setIsLoading(false);
    setName('');
  };

  return (
    <ContainerSearchBar>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Buscar por nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button type="submit">Buscar</Button>
      </form>
      {isLoading && <p>Cargando...</p>}
    </ContainerSearchBar>
  );
}

const mapDispatchToProps = { searchByName };

export default connect(null, mapDispatchToProps)(SearchBar);
