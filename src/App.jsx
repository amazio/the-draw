import { useState } from 'react';
import './App.css';
import * as teamsService from './utilities/teams-service';
import Header from './components/Header/Header';
import TeamGrid from './components/TeamGrid/TeamGrid';

function App() {
  const [teams, setTeams] = useState(teamsService.getInitialTeams());
  const [activeTeam, setActiveTeam] = useState(null);
  const buyInPot = 25000;
  const auctionPot = 6500;
  return (
    <>
      <Header buyInPot={buyInPot} auctionPot={auctionPot} />
      <main>
        <TeamGrid teams={teams} activeTeam={activeTeam} setActiveTeam={setActiveTeam} />
      </main>
      <footer>&copy; 2024 Amazio Software</footer>
    </>
  )
}

export default App
