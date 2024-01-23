import './Payouts.css';

export default function Pot({ buyInPot, auctionPot }) {
  const total = buyInPot + auctionPot;
  return (
    <section className="Payouts">
      <div className="section">PAYOUTS</div>
      <div className='heading first'>First</div>
      <h1 className='first '>{Math.round(total * .7).toLocaleString()}</h1>
      <div className='heading'>Second</div>
      <h1>{Math.round(total * .2).toLocaleString()}</h1>
      <div className='heading last'>Third</div>
      <h1 className='last'>{Math.round(total * .1).toLocaleString()}</h1>
    </section>
  );
}