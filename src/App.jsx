
import './App.css';
import CreateProfile from './components/CreateProfile';
import Footer from './components/Footer';
import Joining from './components/Purpose';
import NavBar from './components/NavBar';
import Registration from './components/Registration';
import VerifyMain from './components/VerifyEmail';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App h-full w-full">
      <NavBar/>
        <div className='w-full h-[90%]'>
          <Outlet/>
        </div>
      {/* <Registration/> */}
      {/* <CreateProfile/> */}
      {/* <VerifyMain/> */}
      <Footer/>
    </div>
  );
}

export default App;
