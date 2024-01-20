import './TeamGrid.css';
import Team from '../Team/Team';

export default function TeamGrid({ teams, activeTeam, setActiveTeam }) {
  const teamCards = teams.map((t) => <Team team={t} key={t.num} />);
  return (
    <section className="TeamGrid">
      {teamCards}
      { activeTeam && 
          <div style={{
            gridColumn: 2,
            gridRow: Math.floor(activeTeam.num / 2 + 1)
          }}>
            BIDDER
          </div>
      }
    </section>
  );
}