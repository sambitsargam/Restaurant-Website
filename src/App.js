import './App.css';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
//we import the create component
import About from './components/About/about';
import Product from './components/Product/product';
import Contact from './components/Contact/contact';
import Home from './components/Home/home';
import NavBarExample from './layouts/navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>

<HashRouter>

<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='product' element={ <Product /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 

</HashRouter>

    </div>
  );
}

export default App;
