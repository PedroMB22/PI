import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home />
    <Footer/>
    </div>
  );
}

export default App;
