import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

export function Home() {

    const navigate = useNavigate();
    function handleClick() {
        navigate('/register')
      }

    return ( 
        <Container>
            <h1>This is Home</h1>
            <button onClick={handleClick}>Vamos começar?</button>
        </Container>
    )
  }
  

  