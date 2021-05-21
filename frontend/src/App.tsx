import List from './components/List'
import { Container, Button, MenuItem, Menu } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Get a pizza recommendation!</h1>
        <List/>
      </Container>
    </div>
  );
}

export default App;
