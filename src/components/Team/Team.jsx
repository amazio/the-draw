import './Team.css';

export default function Team({ team, setActiveTeam, isActive, locked }) {
  return (
    <article
      className={`Team${isActive && !locked ? ' active' : ''}`}
      style={{gridArea: `team-${team.num}`}}
      onClick={() => setActiveTeam(team)}
    >
      <div className='flex-ctr-ctr'>
        <div className='TeamNum'>{team.num}</div>
      </div>
      <div>
        <h3>{team.player1}</h3>
        <h3>{team.player2}</h3>
      </div>
      <div />
      <h2><span className='sup'>$</span>{team.bid}</h2>
    </article>
  );
}