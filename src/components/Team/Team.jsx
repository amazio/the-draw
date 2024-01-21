import './Team.css';

export default function Team({ team, isActive, locked }) {
  return (
    <article
      className={`Team${isActive && !locked ? ' active' : ''}`}
      style={{gridArea: `team-${team.num}`}
    }>
      <div>Team {team.num}</div>
      <h3>{team.player1}</h3>
      <h3>{team.player2}</h3>
    </article>
  );
}