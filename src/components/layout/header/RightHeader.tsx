import googleMenuIcon from '../../../assets/google-menu-icon.png'
import profileIcon from '../../../assets/profile-icon.png'

export default function RightHeader() {
  return (
    <div className="header_block_right">
      <div className="google_menu_block">
        <button className="google_menu_block_btn">
          <img
            className="google_menu_block_btn_img"
            src={googleMenuIcon}
            alt="calendar-google-menu"
          />
        </button>
      </div>
      <div className="google_menu_block">
        <button className="google_menu_block_btn">
          <img
            className="google_menu_block_btn_profile_img"
            src={profileIcon}
          />
        </button>
      </div>
    </div>
  )
}
