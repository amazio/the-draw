import './TeamGrid.css';
import Team from '../Team/Team';
import Bidder from '../Bidder/Bidder';

export default function TeamGrid({ teams, activeTeam, setActiveTeam, locked }) {
  const teamCards = teams.map((t) => <Team team={t} isActive={t === activeTeam} locked={locked} key={t.num} />);
  return (
    <section className="TeamGrid">
      {teamCards}
      { (!locked && activeTeam) && 
          <div style={{
            gridColumn: 2,
            gridRow: Math.floor(activeTeam.num / 2 + 1)
          }}>
            <Bidder activeTeam={activeTeam} />
          </div>
      }
    </section>
  );
}