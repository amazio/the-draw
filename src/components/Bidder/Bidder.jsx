import './Bidder.css';

export default function Bidder({ activeTeam }) {
  return (
    <div className="Bidder">
      <div className={activeTeam.num % 2 ? 'triangle' : ''} />
      <div>
        BIDDER
      </div>
      <div className={activeTeam.num % 2 ? '' : 'triangle'} />
    </div>
  );
}