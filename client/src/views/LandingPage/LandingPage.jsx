import { useNavigate } from 'react-router-dom';
import StyledDiv from '../../components/StyledComponent/constant/StyledDiv';
import Title from '../../components/StyledComponent/constant/Title';
import Button from '../../components/StyledComponent/constant/Button';

function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/home');
  }

  return (
    <StyledDiv>
      <Title>Bienvenido a tu aplicación de videojuegos</Title>
      <Button onClick={handleClick}>Start</Button>
    </StyledDiv>
  );
}

export default LandingPage;
