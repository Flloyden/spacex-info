import './App.css';
import ApiConnector from './ApiConnector/ApiConnector';
import Launches from './Components/Launches/Launches';

function App() {
  return (
    <div className="App">
      SpaceX info
      <ApiConnector />
      <Launches />
    </div>
  );
}

export default App;
