import { useState } from 'react';
import './Bidder.css';
import PlusIcon from '../../assets/plus.svg';
import MinusIcon from '../../assets/minus.svg';

export default function Bidder({ activeTeam, updateBid }) {
  const [bidChangeAmt, setBidChangeAmt] = useState(1000);
  if (!activeTeam) return null;
  const gridRow = Math.round(activeTeam?.num / 2);
  return (
    <div className="Bidder" style={{ gridRow }} >
      <div className={activeTeam.num % 2 ? 'triangle' : ''} />
      <div>
        <img src={MinusIcon} alt='minus icon' onClick={() => updateBid(-1 * bidChangeAmt)} />
        <select value={bidChangeAmt} onChange={(e) => setBidChangeAmt(parseInt(e.target.value))}>
          <option value='100'>100</option>
          <option value='500'>500</option>
          <option value='1000'>1000</option>
        </select>
        <img src={PlusIcon} alt='plus icon' onClick={() => updateBid(bidChangeAmt)} />
      </div>
      <div className={activeTeam.num % 2 ? '' : 'triangle'} />
    </div>
  );
}