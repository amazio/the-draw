import './Header.css';
import Pot from '../Pot/Pot';

export default function Header({ buyInPot, auctionPot }) {
  const year = new Date().getFullYear();
  return (
    <header className='Header'>
      <div className="title">THE DRAW &nbsp;<span>{year}</span></div>
      <div className="triangle" />
      <Pot buyInPot={buyInPot} auctionPot={auctionPot} />
    </header>
  );
}