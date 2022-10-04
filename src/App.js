import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Footer from './components/footer';
import Home from './components/home';
import Nav from './components/nav';
import Single from './components/single';
import Category from './components/category';
import Error404 from './components/error404';
function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/:name/:id' element={<Single/>} />
          <Route path='/:name' element={<Category/>} />
          <Route path='*' element={<Error404/>} />
        </Routes>
        <Footer/>
      </Router>
     
      
    </>
    );
}

export default App;
