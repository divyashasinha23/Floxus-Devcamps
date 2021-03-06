import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import USPSection from './components/USPSection/USPSection.js';
import DataStructure from './components/DataStructure/DataStructure';
import SystemDesign from './components/FrontendDev/FrontendDev';
import Banner from './components/Banners/Banner';
import BrowseSection from './components/BrowseSection/BrowseSection';
import CommunitySection from './components/CommunitySection/CommunitySection';
import EmptyStatePage from './components/EmptyStatePage/EmptyStatePage';
import Footer from './components/Footer/Footer';

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
            <CommunitySection />
            <Footer />
          </Route>

          <Route path="/data-structures" exact>
            <DataStructure />
            <Footer />
          </Route>

          <Route path="/frontend-dev" exact>
            <SystemDesign />
            <Footer />
          </Route>
          <Route path="/coming-soon" exact>
            <EmptyStatePage />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
