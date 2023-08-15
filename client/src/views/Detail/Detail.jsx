import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearGame, getGame } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import GameDetail from '../../components/GameDetail/GameDetail';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearGame());
    dispatch(getGame(id));
  }, [dispatch, id]);

  return (
    <>
      <GameDetail />
    </>
  );
};

export default Detail;
