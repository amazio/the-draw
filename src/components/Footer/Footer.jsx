import './Footer.css';
import LockIcon from '../../assets/lock.svg';
import UnlockIcon from '../../assets/unlock.svg';

export default function Footer({ locked, setLocked }) {
  return (
    <footer className="Footer" onClick={() => setLocked(!locked)} >
      { locked ? <img src={LockIcon} alt="Lock Icon" /> : <img src={UnlockIcon} alt="Unlock Icon" /> }
      <span>&copy; 2024 Amazio Software</span>
    </footer>
  );
}