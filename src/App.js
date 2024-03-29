
import Container from './components/Container/Container.js'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Favorite from './components/Favorite/Favorite'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound.js';
import List from './components/List/List.js'
// import Footer from './components/Footer/Footer.js'


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/list/:listId" element={<List />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Container>
      </main>
    
  );
};


export default App;