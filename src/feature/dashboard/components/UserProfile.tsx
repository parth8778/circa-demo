import "./UserProfile.scss";
import { Button } from "antd";

function UserProfile() {
  return (
    <>
      <div className="user-profile">
        <div className="header">
          <h2 className="title">Contact</h2>
        </div>
        <div className="contact-details">
            <img src="https://www.pngfind.com/pngs/m/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.png" alt="" />
            <h2>John Smith</h2>
            <p>One Riverside</p>
            <div className="buttons">
              <Button className="action-btn" shape="round">CALL</Button>
              <Button className="action-btn" shape="round">EMAIL</Button>
            </div>
          </div>
      </div>
    </>
  );
}

export default UserProfile;
