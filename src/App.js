import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Compontents/Header/Header';
import Navbar from './Compontents/Navbar/Navbar';
import Contact from './Compontents/Contact/Contact';
import Project from './Compontents/Project/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact>
        <Header />
      </Route>
      <Route path="/projects">
        <Project />
      </Route>
      <Route path="/hire">
        <Contact />
      </Route>
    </Router>
  );
}

export default App;
