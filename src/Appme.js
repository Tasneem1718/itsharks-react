
import './App.css';
import Navbar from './compans/navbar/navbar';
import Footer from './compans/footer/footer';
import Posts from './compans/posts/posts';
import Single from './compans/single/single';
import Category from './compans/category/category';
import { BrowserRouter as AllRoutes, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>


      <AllRoutes>
        <Navbar></Navbar>
        <Routes>
          <Route path='/category/:category' element = {<Category/>}/>
          <Route path='/' element={<Posts></Posts>} />
          <Route path={'/singlepost/:id/:category'} element={<Single></Single>} />
          <Route path='*' element={<Posts></Posts>} />
        </Routes>
      </AllRoutes>
      {/* <Posts></Posts> */}
      {/* <Single></Single> */}
      <Footer></Footer>
    </div>
  );
}
export default App;
