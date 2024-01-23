import './Pot.css';

export default function Pot({ buyInPot, auctionPot }) {
  return (
    <section className="Pot">
      <div className="section">POT</div>
      <div className='heading'>Buy-In</div>
      <h1>{buyInPot.toLocaleString()}</h1>
      <div className='heading'>Auction</div>
      <h1>{auctionPot.toLocaleString()}</h1>
      <div className='heading'>Total Pot</div>
      <h1>{(buyInPot + auctionPot).toLocaleString()}</h1>
    </section>
  );
}