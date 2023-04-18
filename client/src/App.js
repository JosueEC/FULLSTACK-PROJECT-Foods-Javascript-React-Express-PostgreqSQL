// import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ContainerCardsDiet from './components/ContainerCardsDiet/ContainerCardsDiet';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContainerCardsDiet />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
