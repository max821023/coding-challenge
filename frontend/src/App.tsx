import ListOne from './components/ListOne';
import { Container, Button, MenuItem, Menu } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Get a pizza recommendation!</h1>
        <ListOne/>
      </Container>
    </div>
  );
}

export default App;
