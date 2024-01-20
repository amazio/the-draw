import { useState, useEffect } from 'react';
import './App.css';
import * as stateService from './utilities/state-service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TeamGrid from './components/TeamGrid/TeamGrid';

function App() {
  const [locked, setLocked] = useState(false);
  const [teams, setTeams] = useState([]);
  const [activeTeam, setActiveTeam] = useState(null);

  useEffect(function() {
    const { teams } = stateService.loadStateFromStorage();
    setTeams(teams);
  }, []);

  const buyInPot = 25000;
  const auctionPot = 6500;
  return (
    <>
      <Header buyInPot={buyInPot} auctionPot={auctionPot} />
      <main>
        <TeamGrid teams={teams} activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
      </main>
      <Footer locked={locked} setLocked={setLocked} />
    </>
  )
}

export default App
