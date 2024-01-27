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
    window.addEventListener('keydown', handleKeydown);
    return function() {
      window.removeEventListener('keydown', handleKeydown);
    }
  }, []);

  useEffect(function() {
    setAuctionPot(teams.reduce((total, team) => total + (team.bid || 0), 0));
  }, [teams]);

  useEffect(function() {
    if (!locked && !activeTeam) setActiveTeam(teams[0]);
  }, [locked]);

  // functions

  function updateBid(amt) {
    if (activeTeam.bid + amt >= 0) {
      const copyActiveTeam = {...activeTeam};
      const copyTeams = [...teams];
      copyTeams.splice(copyActiveTeam.num - 1, 1, copyActiveTeam);
      copyActiveTeam.bid += amt;
      setTeams(copyTeams);
      setActiveTeam(copyActiveTeam);
      localStorage.setItem('teams', JSON.stringify(copyTeams));
    }
  }

  function updateNames(names) {
    const copyTeams = [...teams];
    activeTeam.players = names.players;
    activeTeam.owners = names.owners;
    setTeams(copyTeams);
    localStorage.setItem('teams', JSON.stringify(copyTeams));
  }

  function handleKeydown(evt) {
    if (evt.key === 'K' && evt.shiftKey && evt.ctrlKey) {
      const { teams, buyInPot } = stateService.resetState();
      setTeams(teams);
      setBuyInPot(buyInPot);
      setActiveTeam(null);
      setLocked(true);
    } else if (evt.key === 'B' && evt.shiftKey && evt.ctrlKey) {
      const newBuyIn = parseInt(prompt('Enter new Buy-In amount: '));
      if (!isNaN(newBuyIn)) {
        localStorage.setItem('buyInPot', JSON.stringify(newBuyIn));
        setBuyInPot(newBuyIn);
      }
    }
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
