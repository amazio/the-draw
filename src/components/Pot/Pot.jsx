import './Pot.css';

export default function Pot({ buyInPot, auctionPot }) {
  return (
    <section className="Pot">
      <div className="section">POT</div>
      <div className='heading first'>Buy-In</div>
      <h1 className='first'>{buyInPot.toLocaleString()}</h1>
      <div className='heading second'>Auction</div>
      <h1 className='second'>{auctionPot.toLocaleString()}</h1>
      <div className='heading last'>Total Pot</div>
      <h1 className='last'>{(buyInPot + auctionPot).toLocaleString()}</h1>
    </section>
  );
}