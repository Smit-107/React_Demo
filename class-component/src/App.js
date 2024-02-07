import logo from './logo.svg';
import './App.css';
import Demo from './demo';

function App() {

  var op = '1 0 1 0 1'

  return (
    <div className="App">
      <Demo op={op} />
    </div>
  );
}

export default App;
