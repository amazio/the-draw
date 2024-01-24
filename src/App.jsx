import { useState, useEffect } from 'react';
import './App.css';
import * as stateService from './utilities/state-service';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TeamGrid from './components/TeamGrid/TeamGrid';

function App() {
  const [locked, setLocked] = useState(true);
  const [teams, setTeams] = useState([]);
  const [buyInPot, setBuyInPot] = useState(0);
  const [auctionPot, setAuctionPot] = useState(0);
  const [activeTeam, setActiveTeam] = useState(null);

  useEffect(function() {
    const { teams, buyInPot } = stateService.loadStateFromStorage();
    setTeams(teams);
    setBuyInPot(buyInPot);
    setLocked(true);
  }, []);

  useEffect(function() {
    setAuctionPot(teams.reduce((total, team) => total + (team.bid || 0), 0));
  }, [teams]);

  useEffect(function() {
    if (!locked && !activeTeam) setActiveTeam(teams[0]);
  }, [locked]);

  // functions

  function updateBid(amt) {
    const copyTeams = [...teams];
    if (activeTeam.bid === '') activeTeam.bid = 0;
    if (activeTeam.bid + amt >= 0) {
      activeTeam.bid += amt;
      setTeams(copyTeams);
      localStorage.setItem('teams', JSON.stringify(copyTeams));
    }
  }

  function updateNames(names) {
    console.log('updating names', names)
    const copyTeams = [...teams];
    activeTeam.players = names.players;
    activeTeam.owners = names.owners;
    setTeams(copyTeams);
    localStorage.setItem('teams', JSON.stringify(copyTeams));
  }

  const winPot = Math.round((buyInPot + auctionPot) * .7);

  return (
    <>
      <Header buyInPot={buyInPot} auctionPot={auctionPot} />
      <main className={`${locked ? 'locked' : ''}`}>
        <TeamGrid
          teams={teams}
          winPot={winPot}
          activeTeam={activeTeam}
          setActiveTeam={setActiveTeam}
          updateBid={updateBid}
          updateNames={updateNames}
          locked={locked}
        />
      </main>
      <Footer locked={locked} setLocked={setLocked} />
    </>
  )
}

export default App
