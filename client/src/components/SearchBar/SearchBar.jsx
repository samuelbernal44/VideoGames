import { useState } from 'react';
import { connect } from 'react-redux';
import { searchByName } from '../../redux/actions';
import { useNavigate } from 'react-router-dom';

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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      {isLoading && <p>Cargando...</p>}
    </>
  );
}

const mapDispatchToProps = { searchByName };

export default connect(null, mapDispatchToProps)(SearchBar);
