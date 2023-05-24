import '../src/css/app.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults/SearchResults';
import CreateDog from './components/Form/Form';
import Details from './components/Details/Details';
import Landing from './components/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<><NavBar /><Home /><Footer /></>} />
          <Route path="/search-results" element={<><NavBar /><SearchResults /><Footer /></>} />
          <Route path="/create-dog" element={<><NavBar /><CreateDog /><Footer /></>} />
          <Route path="/dogdetail/:id" element={<><NavBar /><Details /><Footer /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
