import './Pot.css';

export default function Pot({ buyInPot, auctionPot }) {
  return (
    <section className="Pot">
      <div className='heading'>Buy-In</div>
      <div />
      <div className='heading'>Auction</div>
      <div />
      <div className='heading'>Total Pot</div>
      <h1><span className='sup'>$</span>{buyInPot}</h1>
      <h1 className='symbol'>+</h1>
      <h1><span className='sup'>$</span>{auctionPot}</h1>
      <h1 className='symbol'>=</h1>
      <h1><span className='sup'>$</span>{(buyInPot + auctionPot)}</h1>
    </section>
  );
}