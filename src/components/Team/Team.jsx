import './Team.css';

export default function Team({ team, setActiveTeam, isActive, locked }) {
  return (
    <article
      className={`Team${isActive && !locked ? ' active' : ''}`}
      style={{gridArea: `team-${team.num}`}}
      onClick={() => setActiveTeam(team)}
    >
      <div>Team {team.num}</div>
      <h3>{team.player1}</h3>
      <h3>{team.player2}</h3>
    </article>
  );
}