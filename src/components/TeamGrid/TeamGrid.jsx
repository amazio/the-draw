import './TeamGrid.css';
import Team from '../Team/Team';
import Bidder from '../Bidder/Bidder';

export default function TeamGrid({ teams, winPot, activeTeam, setActiveTeam, updateBid, updateNames, locked }) {
  const teamCards = teams.map((t) => <Team
    team={t}
    winPot={winPot}
    setActiveTeam={setActiveTeam}
    isActive={t === activeTeam}
    locked={locked}
    updateNames={updateNames}
    key={t.num}
  />);
  return (
    <section className="TeamGrid">
      {teamCards}
      { (!locked && activeTeam) && 
        <Bidder
          activeTeam={activeTeam}
          updateBid={updateBid}
        />
      }
    </section>
  );
}