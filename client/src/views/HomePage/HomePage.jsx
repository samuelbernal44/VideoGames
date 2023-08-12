import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGames } from '../../redux/actions';
import GameList from '../../components/GameList/GameList';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);
  return (
    <div>
      <h1>Home Page</h1>
      <GameList />
    </div>
  );
}

export default HomePage;
