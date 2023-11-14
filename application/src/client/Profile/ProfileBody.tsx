import "./ProfileBody.css";
import {
  FaUser,
  FaLock,
  FaUserFriends,
  FaStar,
  FaLink,
  FaKey,
  FaBell,
} from "react-icons/fa";

function ProfileBody() {
  return (
    <main className="profile-body-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={"/profile-image.png"}
          alt="Profile Image"
        />
      </div>
      <div className="profile-name">~ meoowuffi</div>
      <div className="profile-email">meow@slep.moo</div>

      <div className="profile-button-container">
        <div className="profile-button">
          <div>
            <FaUser className="icon" />
          </div>
          <div>Profile</div>
        </div>
        <div className="profile-button">
          <div>
            <FaLock className="icon" />
          </div>
          <div>Privacy</div>
        </div>
        <div className="profile-button">
          <div>
            <FaUserFriends className="icon" />
          </div>
          <div>Contacts</div>
        </div>
      </div>

      <div className="profile-line-container">
        <div>
          <FaStar className="line-icon" />
        </div>
        <div className="spacer">Starred Blog pages</div>
      </div>
      <div className="profile-line-container">
        <div>
          <FaLink className="line-icon" />
        </div>
        <div className="spacer">Linked devices</div>
      </div>

      <div className="divider-line"></div>

      <div className="profile-line-container">
        <div>
          <FaKey className="line-icon" />
        </div>
        <div className="spacer tall-spacer">
          Account
          <div>Security notifications, change email</div>
        </div>
      </div>

      <div className="profile-line-container">
        <div>
          <FaBell className="line-icon" />
        </div>
        <div className="spacer tall-spacer">
          Notifications
          <div>Input prompts, alarm</div>
        </div>
      </div>
    </main>
  );
}

export default ProfileBody;
