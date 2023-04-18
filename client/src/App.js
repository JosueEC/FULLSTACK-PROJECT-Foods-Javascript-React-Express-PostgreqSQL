// import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import ContainerCardsDiet from './components/ContainerCardsDiet/ContainerCardsDiet';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ContainerCardsDiet />
    </div>
  );
}

export default App;
