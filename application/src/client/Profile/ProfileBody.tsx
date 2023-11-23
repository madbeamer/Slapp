import "./ProfileBody.css";
import React from "react";
import {
  FaUser,
  FaLock,
  FaUserFriends,
  FaSignOutAlt,
  FaStar,
  FaLink,
  FaKey,
  FaBell,
  FaPalette,
  FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface ProfileButtonProps {
  icon: any;
  text: string;
  iconClassName?: string;
}

function ProfileButton({
  icon,
  text,
  iconClassName = "icon",
}: ProfileButtonProps) {
  return (
    <>
      <div className="profile-button">
        <div>{React.cloneElement(icon, { className: iconClassName })}</div>
        <div>{text}</div>
      </div>
    </>
  );
}

interface ProfileLineContainerProps {
  icon: any;
  text: string;
  iconClassName?: string;
  smallText?: string;
}

function ProfileLineContainer({
  icon,
  text,
  iconClassName = "line-icon",
  smallText,
}: ProfileLineContainerProps) {
  return smallText ? (
    <>
      <div className="profile-line-container">
        <div>
          <div>{React.cloneElement(icon, { className: iconClassName })}</div>
        </div>
        <div className="spacer tall">
          {text}
          <div>{smallText}</div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="profile-line-container">
        <div>{React.cloneElement(icon, { className: iconClassName })}</div>
        <div className="spacer">{text}</div>
      </div>
    </>
  );
}

function ProfileBody() {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <main className="profile-body-container">
      <div className="profile-image-container">
        <img
          className="profile-image"
          src={"./profile-image.png"}
          alt="Profile Image"
        />
      </div>
      <div className="profile-name">~ meoowuffi</div>
      <div className="profile-email">meow@slep.moo</div>

      <div className="profile-button-container">
        <ProfileButton icon={<FaUser />} text="Profile" />
        <ProfileButton icon={<FaLock />} text="Privacy" />
        <ProfileButton icon={<FaUserFriends />} text="Contacts" />
      </div>

      <ProfileLineContainer icon={<FaStar />} text="Starred Blog pages" />
      <ProfileLineContainer icon={<FaLink />} text="Linked devices" />

      <div className="divider-line"></div>

      <ProfileLineContainer
        icon={<FaKey />}
        text="Account"
        smallText="Security notifications, change email"
      />

      <ProfileLineContainer
        icon={<FaPalette />}
        text="Appearance"
        smallText="Theme, input style"
      />

      <ProfileLineContainer
        icon={<FaBell />}
        text="Notifications"
        smallText="Input prompts, alarm"
      />

      <ProfileLineContainer
        icon={<FaGlobe />}
        text="Language"
        smallText="English"
      />

      <button type="button" className="logout-button" onClick={handleLogout}>
        Logout
        <FaSignOutAlt className="logout-icon" />
      </button>
    </main>
  );
}

export default ProfileBody;
