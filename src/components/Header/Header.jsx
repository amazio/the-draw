import Pot from '../Pot/Pot';

export default function Header({ buyInPot, auctionPot }) {
  return (
    <header>
      <div className="title">THE DRAW &nbsp;2024</div>
      <div className="triangle" />
      <Pot buyInPot={buyInPot} auctionPot={auctionPot} />
    </header>
  );
}