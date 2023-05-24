import { useState } from 'react';
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
  const [visited, setVisited] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar />
        {visited ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search-results" element={<SearchResults />} />
            <Route path="/create-dog" element={<CreateDog />} />
            <Route path="/dogdetail/:id" element={<Details />} />
          </Routes>
        ) : (
          <Landing onEnter={() => setVisited(true)} />
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
