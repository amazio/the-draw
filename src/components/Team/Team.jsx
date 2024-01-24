import { useState } from 'react';
import './Team.css';

export default function Team({ team, winPot, setActiveTeam, updateNames, isActive, locked }) {
  const [names, setNames] = useState({
    players: team.players,
    owners: team.owners
  });

  function changeNames(evt) {
    const updatedNames = {...names, [evt.target.name]: evt.target.value};
    setNames(updatedNames);
    updateNames(updatedNames);
  }

  const label = <span>&nbsp;&nbsp;∆ Players &nbsp;&nbsp; ∇ Owner(s)</span>;
  const odds = team.bid > 0 ? `${Math.round((winPot - team.bid)/ team.bid)}:1` : 'N/A';

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
          <input name='players' value={names.players} onChange={changeNames} placeholder='Players...'/>
          <div className="labels">&nbsp;&nbsp;∆ Players &nbsp;&nbsp; ∇ Owner(s)</div>
          <input name='owners' value={names.owners} onChange={changeNames} placeholder='Owner(s)...'/>
        </div>
        :
        <div className='flex-col-around-start playerNames'>
          <h3>{team.players}&nbsp;</h3>
          <div className="labels">{team.players || team.owners ? label : <span>&nbsp;</span>}</div>
          <h3>{team.owners}&nbsp;</h3>
        </div>
      }
      <div className='flex-col-ctr-ctr'>
        <div className='heading'>{team.owners ? 'Sold' : 'Bid'}</div>
        <h2>{team.bid.toLocaleString()}</h2>
        <div className='heading'>{odds}</div>
      </div>
    </article>
  );
}