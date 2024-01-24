import { useState } from 'react';
import './Bidder.css';
import PlusIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';

export default function Bidder({ activeTeam, updateBid }) {
  const [bidChangeAmt, setBidChangeAmt] = useState(500);
  if (!activeTeam) return null;
  const gridRow = Math.round(activeTeam?.num / 2);
  const pointLeft = activeTeam.num % 2;
  return (
    <div className='Bidder' style={{ gridRow }} >
      <div className={pointLeft ? 'triangle' : ''} />
      <div>
        <img src={PlusIcon} alt='plus icon' onClick={() => updateBid(bidChangeAmt)} />
        <select value={bidChangeAmt} onChange={(e) => setBidChangeAmt(parseInt(e.target.value))}>
          <option value='100'>100</option>
          <option value='500'>500</option>
          <option value='1000'>1000</option>
        </select>
        <img src={MinusIcon} alt='minus icon' onClick={() => updateBid(-1 * bidChangeAmt)} />
      </div>
      <div className={!pointLeft ? 'triangle' : ''} />
    </div>
  );
}