import "./navbar.css"
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Navbar() {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <span className="navbarLogo">YO!PHOTO</span>
      </div>
      <div className="navbarCenter">
        <span className="navbarLink">Contest</span>
        <span className="navbarLink">Gallery</span>
        <span className="navbarLink">Collection</span>
      </div>
      <div className="navbarRight">
        <PersonIcon/>
        <NotificationsIcon/>
      </div>
    </div>
  )
}
