import '../src/css/App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults/SearchResults';
import CreateDog from './components/Form/Form';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/createdog" element={<CreateDog />} />
          <Route path="/dogdetail/:id" element={<Details />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
