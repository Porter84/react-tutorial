import logo from './logo.svg';
import './App.css';
import { Card } from './Card'

function App() {
  return (
    <div className="App">
      <Card name="Robi" age="39" />
      <Card name="Marci" age="30" />
      <Card name="Max" age="45" />
    </div>
  );
}

export default App;
