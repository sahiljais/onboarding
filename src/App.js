import './App.css';
import Form from './components/Form';
import Navigation from './components/Navigation';
import Stepper from './components/Stepper';
import { Container } from './components/styles/Container.styled.js';
import { Title } from './components/styles/Title.styled';

function App() {
  return (
    <Container>
        <Title>
          Cutshort
        </Title>
        <Navigation />    
    </Container>
  );
}

export default App;
