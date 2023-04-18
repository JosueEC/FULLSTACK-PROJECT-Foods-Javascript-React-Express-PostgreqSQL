// import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ContainerCardsDiet from './components/ContainerCardsDiet/ContainerCardsDiet';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContainerCardsDiet />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
