import "./Payments.scss";
import { Button, Dropdown, Menu, Space, Tabs } from "antd";
import { MoreOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

function Payments() {
  const onClick = ({ key }: any) => {};

  const menu = (
    <Menu
      onClick={onClick}
      items={[
        {
          label: "1st menu item",
          key: "1",
        },
        {
          label: "2nd menu item",
          key: "2",
        },
        {
          label: "3rd menu item",
          key: "3",
        },
      ]}
    />
  );

  return (
    <>
      <div className="payments-info">
        <h2 className="title">Payments</h2>

        <Tabs type="card">
          <TabPane tab="PAST" key="1">
            <div className="payment-history-list">
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
            </div>
          </TabPane>
          <TabPane tab="UPCOMING" key="2">
            <div className="payment-history-list">
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
              <div className="payment-history-item">
                <h5>Jan 1</h5>
                <h5>$505</h5>
                <h5 className="badge">2</h5>
                <div className="more-btn-container">
                  <Dropdown overlay={menu}>
                    <span onClick={(e) => e.preventDefault()}>
                      <Space>
                        <MoreOutlined />
                      </Space>
                    </span>
                  </Dropdown>
                </div>
              </div>
            </div>
          </TabPane>
        </Tabs>

        <div className="card-footer">
          <Button className="see-more-btn" type="text">
            SEE MORE
          </Button>
        </div>
      </div>
    </>
  );
}

export default Payments;
