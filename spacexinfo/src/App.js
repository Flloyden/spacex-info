import { useState } from 'react';
import './App.css';
import Launches from './Components/Launches/Launches';
import Mainframe from './Components/Mainframe/Mainframe';
import Navbar from './Components/Navbar/Navbar';
import Rockets from './Components/Rockets/Rockets';
import MyLaunches from './Components/MyLaunches/MyLaunches';
import ScrollButton from './Components/ScrollButton/ScrollButton';


function App() {
  const [mainFrame] = useState([
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
      title: "My Launches"
      ,
      frame: <MyLaunches />

    },


  ]);

  const [frame, setFrame] = useState(<Mainframe />)

  function changeFrame(id) {
    setFrame(id)
  }

  return (
    <div className='content'>
      <div className='row container-fluid pt-4'>
        <div className='col-3 p-0'>
          <Navbar items={mainFrame} changeFrame={changeFrame} />
        </div>
        <div className='col-6 d-flex align-items-center text-center justify-content-center'>
          <img className='img-fluid img-max mb-3' src='./images/SpaceX-logo.png' alt='SpaceX logo' />
        </div>
        <div className='col-3 p-0'>
        </div>
        <main className="container frame-content row m-auto">
          {frame}
        </main>
        <ScrollButton />
      </div>
    </div>
  );
}

export default App;
