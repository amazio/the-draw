import './Header.css';
import Pot from '../Pot/Pot';
import Payouts from '../Payouts/Payouts';

export default function Header({ buyInPot, auctionPot }) {
  const year = new Date().getFullYear();
  return (
    <header className='Header'>
      <div className="title">THE DRAW &nbsp;<span>{year}</span></div>
      <div className="triangle" />
      <div className="money">
        <Pot buyInPot={buyInPot} auctionPot={auctionPot} />
        <Payouts buyInPot={buyInPot} auctionPot={auctionPot} />
      </div>
    </header>
  );
}