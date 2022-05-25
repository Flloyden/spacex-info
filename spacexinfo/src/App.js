import './App.css';
import Launches from './Components/Launches/Launches';
import Rockets from './Components/Rockets/Rockets';

function App() {
  return (
    <main className="container row m-auto">

      <h1 className='text-center'>SpaceX info</h1>
      
      <div className='col-lg-6'>
        <h2>Launches</h2>
        <Launches />
      </div>

      <div className='col-lg-6'>
        <h2>Rockets</h2>
        <Rockets />
      </div>
      
  
    </main>
  );
}

export default App;
