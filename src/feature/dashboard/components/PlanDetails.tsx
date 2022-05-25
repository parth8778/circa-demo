import "./PlanDetails.scss";
import { Button, List } from "antd";
import {
  CalendarOutlined,
  ReloadOutlined,
  HomeOutlined,
} from "@ant-design/icons";

function PlanDetails() {
  const listData = [
    {
      title: "2 Pay",
      icon: <CalendarOutlined />,
    },
    {
      title: "1st & 13th of every month",
      icon: <HomeOutlined />,
    },
    {
      title: "Lauren's Checking",
      icon: <CalendarOutlined />,
    },
    {
      title: "Autopay",
      icon: <ReloadOutlined />,
    },
  ];
  return (
    <>
      <div className="plan-details">
        <div className="header">
          <h2 className="title">Plan</h2>
          <Button className="edit-btn" type="text">
            EDIT
          </Button>
        </div>

        <div className="monthly-plans">
          <h2 className="title">Monthly Plan</h2>
          <List
            itemLayout="horizontal"
            dataSource={listData}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<div className="custom-avatar">{item.icon}</div>}
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </div>

        <div className="expectations">
          <h2 className="title">
            Exceptions
            <Button className="edit-btn" type="text">
              ADD
            </Button>
          </h2>

          <div className="no-expectations">No Scheduled Expectations</div>
        </div>
      </div>
    </>
  );
}

export default PlanDetails;
