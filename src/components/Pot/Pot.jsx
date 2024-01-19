import './Pot.css';

export default function Pot() {
  return (
    <section className="Pot">
      <div className='heading'>Buy-In</div>
      <div />
      <div className='heading'>Auction</div>
      <div />
      <div className='heading'>Total Pot</div>
      <h1>$25,000</h1>
      <h1 className='symbol'>+</h1>
      <h1>$4,500</h1>
      <h1 className='symbol'>=</h1>
      <h1>$29,500</h1>
    </section>
  );
}