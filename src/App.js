import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
//we import the create component
import About from './components/About/about';
import Product from './components/Product/product';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import NavBarExample from './layouts/navbar';
// import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">

<BrowserRouter basename={window.location.pathname || ''}>

<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route exact element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='product' element={ <Product /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
{/* <Footer /> */}
</BrowserRouter>

    </div>
  );
}

export default App;
