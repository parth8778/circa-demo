import "./DueInfoBox.scss";

import { Button } from "antd";

function DueInfoBox() {
  return (
    <>
      <div className="due-info">
            <div>
              <p>$505 due in</p>
              <h2>5 Days</h2>
            </div>
            <Button className="primary-round-button" type="text">
              MODIFY
            </Button>
          </div>
    </>
  );
}

export default DueInfoBox;
