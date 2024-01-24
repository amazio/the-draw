import './Footer.css';
import GearIcon from '../../assets/gear.svg';
import LockIcon from '../../assets/lock.svg';
import UnlockIcon from '../../assets/unlock.svg';

export default function Footer({ locked, setLocked }) {
  return (
    <footer className="Footer">
      <span>
        { locked ?
          <img src={LockIcon} alt="Lock Icon" onClick={() => setLocked(false)} />
          :
          <>
            <img src={UnlockIcon} alt="Unlock Icon" onClick={() => setLocked(true)} />
            {/* &nbsp;&nbsp;&nbsp;
            <img src={GearIcon} alt="Gear Icon" /> */}
          </>
        }
      </span>
      <span>&copy; 2024 Amazio Software</span>
    </footer>
  );
}