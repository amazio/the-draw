import { useState } from 'react';
import './Team.css';

export default function Team({ team, setActiveTeam, updatePlayers, isActive, locked }) {
  const [playerNames, setPlayerNames] = useState({
    player1: team.player1,
    player2: team.player2
  });

  function updatePlayer(evt) {
    const updatedPlayers = {...playerNames, [evt.target.name]: evt.target.value};
    setPlayerNames(updatedPlayers);
    updatePlayers(updatedPlayers);
  }

  return (
    <article
      className={`Team${isActive && !locked ? ' active' : ''}`}
      style={{gridArea: `team-${team.num}`}}
      onClick={() => !locked && setActiveTeam(team)}
    >
      <div className='flex-ctr-ctr'>
        <div className='TeamNum'>{team.num}</div>
      </div>
      { !locked && isActive ?
        <div className='flex-col-around-start playerNames'>
          <input name='player1' value={playerNames.player1} onChange={updatePlayer} placeholder='Player Name' />
          <input name='player2' value={playerNames.player2} onChange={updatePlayer} placeholder='Player Name' />
        </div>
        :
        <div className='flex-col-around-start playerNames'>
          <h3>{team.player1}</h3>
          <h3>{team.player2}</h3>
        </div>
      }
      <div />
      <div className='flex-col-ctr-ctr'>
        <div className='heading'>Bid</div>
        <h2><span className='sup'>$</span>{team.bid}</h2>
      </div>
    </article>
  );
}