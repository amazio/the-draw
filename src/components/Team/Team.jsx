import './Team.css';

export default function Team({ team }) {
  return (
    <article className='Team' style={{gridArea: `team-${team.num}`}}>
      <div>Team {team.num}</div>
      <h3>{team.player1}</h3>
      <h3>{team.player2}</h3>
    </article>
  );
}