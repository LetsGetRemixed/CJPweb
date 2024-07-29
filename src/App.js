import './App.css';
import Home from './components/Home/home';
import Contact from './components/Contact/contact';
import Gallery from './components/Gallery/gallery';
import Team from './components/Team/team';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
      <Router>
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          
        </Routes>
        
      </Router>
    );
  }

export default App;
