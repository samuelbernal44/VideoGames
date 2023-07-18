import { useState, useEffect } from 'react';

function GamesList() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiKey = '3a0ba3c36b1c44f2863e3c9810fc902b';
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const targetUrl = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=100`;

    fetch(proxyUrl + encodeURIComponent(targetUrl))
      .then((response) => response.json())
      .then((data) => setGames(data.results));
  }, [page]);

  return (
    <div>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)}>Anterior</button>
      <button onClick={() => setPage(page + 1)}>Siguiente</button>
    </div>
  );
}

export default GamesList;
