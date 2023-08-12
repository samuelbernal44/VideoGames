import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getGame } from '../../redux/actions';
import { useParams } from 'react-router-dom';
import GameDetail from '../../components/GameDetail/GameDetail';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGame(id));
  }, [dispatch]);

  return (
    <>
      <GameDetail />
    </>
  );
};

export default Detail;
