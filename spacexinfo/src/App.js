import { useState } from 'react';
import './App.css';
import Launches from './Components/Launches/Launches';
import Mainframe from './Components/Mainframe';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets/Rockets';

function App() {
  const [mainFrame, setMainFrame] = useState([
    {
      id: 1,
      title: "Home",
      frame: <Mainframe />
      },
    {
      id: 2,
      title: "Launches"
      ,
      frame: <Launches />
    },
    {
      id: 3,
      title: "Rockets"
      ,
      frame: <Rockets />
    },
    {
      id: 4,
      title: "My launches"
      ,
      frame: <Mainframe />
    }
]);

  const [frame, setFrame] = useState(<Mainframe />)

function changeFrame(id) {
  setFrame(id)
}

  return (
    <div>
      <ul className="list-group">
        <Navbar items={mainFrame} changeFrame={changeFrame} />
      </ul>

      <main className="container row m-auto">

        <h1 className='text-center'>SpaceX info</h1>
        
        <div className='col-lg-12'>
          {frame}
        </div>
      </main>
    </div>
  );
}

export default App;
