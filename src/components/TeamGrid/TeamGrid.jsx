import './TeamGrid.css';
import Team from '../Team/Team';
import Bidder from '../Bidder/Bidder';

export default function TeamGrid({ teams, activeTeam, setActiveTeam, locked }) {
  const teamCards = teams.map((t) => <Team
    team={t}
    setActiveTeam={setActiveTeam}
    isActive={t === activeTeam}
    locked={locked}
    key={t.num}
  />);
  return (
    <section className="TeamGrid">
      {teamCards}
      { (!locked && activeTeam) && 
        <Bidder activeTeam={activeTeam} />
      }
    </section>
  );
}