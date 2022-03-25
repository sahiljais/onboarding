import './App.css';
import Navigation from './components/Navigation';
import { Container } from './components/styles/Container.styled.js';
import { StyledImage } from './components/styles/Image.styled';
import { Title } from './components/styles/Title.styled';

function App() {
  return (
    <Container>
        <Title>
          <StyledImage src={"/logo-new.png"} />
          <span style={{paddingLeft:"0.5rem"}}>Cutshort</span>
        </Title>
        <Navigation />    
    </Container>
  );
}

export default App;
