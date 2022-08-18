import './App.css';
// import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Services from './Components/Services/Services';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Warranty from './Components/Warranty/Warranty';
import Newpatients from './Components/Newpatients/Newpatients';
import Loggedin from './Components/Loggedin/Loggedin';
import Booking from './Components/Booking/Booking';
import Authprovider from './context/Authprovider';
// import Privateroute from './Components/PrivateRoute/Privateroute';
import RequiredAuth from './Components/PrivateRoute/RequiredAuth';
// import Route from './Components/Route/Route';


function App() {
  return (
    <div className="App">
      <Authprovider>
        <Router>
          <Header></Header>
          <Routes>
            <Route path='/home' element={<Home></Home>}>

            </Route>
            <Route path='/' element={<Home></Home>}>

            </Route>
            <Route exact path='/about' element={<About></About>}>

            </Route>
            <Route path='/services' element={<Services></Services>}>
            </Route>
            <Route path='/newpatients' element={<Newpatients></Newpatients>}>
            </Route>
            <Route path='/warranty' element={<Warranty></Warranty>}></Route>
            <Route path='/loggedin' element={<Loggedin></Loggedin>}></Route>
            <Route path='/booking/:serviceId' element={<RequiredAuth><Booking></Booking></RequiredAuth>}></Route>

            <Route path='*' element={<Notfound></Notfound>}>

            </Route>

          </Routes>
          <Footer></Footer>
        </Router>
      </Authprovider>

    </div >
  );
};



export default App;
