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
    /**
     * Declaring the different menu-choices
     */
    {
      id: 1,
      title: "Home",
      frame: <Mainframe />
    },
    {
      id: 2,
      title: "Launches",
      frame: <Launches />
    },
    {
      id: 3,
      title: "Rockets",
      frame: <Rockets render={'renderRocket'}/>
    },
    {
      id: 4,
      title: "My Launches",
      frame: <MyLaunches />
    },


  ]);

  const [showA, setShowA] = useState('toast hide');

  const toggleShowA = () => setShowA('toast show');

  
  // declaring state variable
  const [frame, setFrame] = useState(<Mainframe />)

  function changeFrame(id) {
    /**
     * Chanching frame based on user choice
     */
    setFrame(id)
  }

  return (
    <div className='content'>
      <div className='row container-fluid pt-4 m-0'>
        <div className='position-fixed col-3 p-0 nav-div'>
          <Navbar items={mainFrame} changeFrame={changeFrame} />
        </div>
        <div className='col-12 d-flex align-items-center text-center justify-content-center'>
          <img className='img-fluid img-max mb-3' src='./images/SpaceX-logo.png' alt='SpaceX logo' />
        </div>
        
        <main className="container frame-content row m-auto p-0 pb-4">
          {frame}
        </main>
        <ScrollButton />

        
        <div className="mb-2">
          <button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </button>
          <div className={showA} data-bs-autohide="false"
            data-bs-delay="3000" onClose={toggleShowA}>
            <div>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </div>
            <div>Woohoo, you're reading this text in a Toast!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
