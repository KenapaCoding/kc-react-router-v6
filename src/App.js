import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About'
import Cars from './pages/Cars'
import CarDetail from './pages/CarDetail';
import SecondCar from './pages/SecondCar'
import CarLayout from './CarLayout';
import Contact from './pages/Contact';

function App() {
  return (
   <>
    <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/cars' element={<CarLayout/>}>
        <Route index element={<Cars/>}/>
        <Route path='/cars/:id' element={<CarDetail/>}/>
        <Route path='/cars/second' element={<SecondCar/>}/>
      </Route> 


      {/* <Route path='/cars' element={<Cars/>}/>
      <Route path='/cars/:id' element={<CarDetail/>}/>
      <Route path='/cars/second' element={<SecondCar/>}/> */}
    </Routes>
   </>
  );
}

export default App;
