import { useState } from 'react';
import './App.css';
import Launches from './Components/Launches/Launches';
import Mainframe from './Components/Mainframe/Mainframe';
import Navbar from './Components/Navbar';
import Rockets from './Components/Rockets/Rockets';
import MyLaunches from './Components/MyLaunches/MyLaunches';
import { Fragment } from 'react';
import ScrollButton from './Components/ScrollButton/ScrollButton';
import { Content } from './Components//ScrollButton/Styles';


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
      title: "MyLaunches"
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
        <div className='col-2'>
              <Navbar items={mainFrame} changeFrame={changeFrame} />
          </div>
          <div className='col-8 text-center pt-2'>
            <img className='img-fluid img-max' src='./SpaceX-logo.png' alt='SpaceX logo' />
          </div>
          <div className='col-2'>
          </div>
        </div>
        <main className="container frame-content row m-auto">       
          {frame}
        </main>
        <Fragment>
          <Content />
          <ScrollButton />
        </Fragment>
  
    </div>
  );
}

export default App;
