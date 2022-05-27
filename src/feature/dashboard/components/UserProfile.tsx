import "./UserProfile.scss";
import { Button } from "antd";

function ActionInfoBox() {
  return (
    <>
      <div className="plan-info">
        <div>
          <h2>Action Required</h2>
          <p>Your account has a balance of $1000.</p>
          <p>
            Make a plan with your property to pay back missed rent using Circa
            RentAssist.
          </p>
        </div>
        <Button className="primary-round-button" type="text">
          MAKE A PLAN
        </Button>
      </div>
    </>
  );
}

export default ActionInfoBox;
