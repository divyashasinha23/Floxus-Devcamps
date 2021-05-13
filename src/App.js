import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import USPSection from './components/USPSection/USPSection.js';
import DataStructure from './components/DataStructure/DataStructure';
import SystemDesign from './components/SystemDesign/SystemDesign';
import Banner from './components/Banners/Banner';
import BrowseSection from './components/BrowseSection/BrowseSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HeroSection />
            <BrowseSection />
            <USPSection />
            <Banner />
          </Route>

          <Route path="/data-structures" exact>
            <DataStructure />
          </Route>

          <Route path="/System-design" exact>
            <SystemDesign />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
