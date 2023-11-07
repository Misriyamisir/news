import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Land from './pages/Land';




function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
  <Route path='/' element={<Home></Home>}></Route>     
  <Route path='/land/:id' element={<Land></Land>}></Route>
</Routes>      
<Footer></Footer>
    </div>
  );
}

export default App;
