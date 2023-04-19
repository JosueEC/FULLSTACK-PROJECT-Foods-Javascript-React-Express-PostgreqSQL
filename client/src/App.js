import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import ContainerCardsDiet from './components/ContainerCardsDiet/ContainerCardsDiet'

import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import * as route from './utilities/routePages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path={route.pathHome}
          element={<Home />}
        />
        <Route 
          path={route.pathRecipes}
          element={<ContainerCardsDiet />}
        />
        <Route 
          path={route.pathAbout}
          element={<About />}
        />
        <Route 
          path={route.pathContact}
          element={<Contact />}
        />
      </Routes>
    </div>
  );
}

export default App;
