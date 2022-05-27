import "./Payments.scss";
import { Button, Dropdown, Menu, Space, Tabs } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
const { TabPane } = Tabs;

function Payments() {
  const onClick = ({ key }: any) => {};
  const [upcomingPayments, setUpcomingPayments] = useState<any>();
  const [pastPayments] = useState<any>([]);

  const currentLeaseSubscription = useSelector(
    (state: InitialState) => state.selectedLease
  );
  useEffect(() => {
    console.log('currentLeaseSubscription: ', currentLeaseSubscription);
    setUpcomingPayments(currentLeaseSubscription.upcomingPayments);
  }, [currentLeaseSubscription]);

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

  function renderSwitch(planType: string) {
    switch (planType) {
      case "onepay":
        return "1";
      case "twopay":
        return "2";
      case "fourpay":
        return "4";
      case "onepaydeferred":
        return "0";
      default:
        return "1";
    }
  }

  return (
    <>
      <div className="payments-info">
        <h2 className="title">Payments</h2>

        <Tabs type="card">
          <TabPane tab="PAST" key="1">
            {
              pastPayments?.length === 0 && <div className="no-data">No Data Found</div>
            }  
            {pastPayments?.map((payment: any, index: number) => {
              return (
                <div key={index} className="payment-history-list">
                  <div className="payment-history-item">
                    <h5>{moment(payment?.paymentDate).format('MMM DD')}</h5>
                    <h5>${payment?.amount}</h5>
                    <h5 className={renderSwitch(payment.plan) === '0' ? 'no-border badge' : 'badge'}>{renderSwitch(payment.plan) === '0' ? '1' : renderSwitch(payment.plan)}</h5>
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
              );

            })}
          </TabPane>
          <TabPane tab="UPCOMING" key="2">
            <div className="payment-history-list">
            {
              upcomingPayments?.length === 0 && <div className="no-data">No Data Found</div>
            }  
            {upcomingPayments?.map((payment: any, index: number) => {
              return (
                <div key={index} className="payment-history-list">
                  <div className="payment-history-item">
                    <h5>{moment(payment?.paymentDate).format('MMM DD')}</h5>
                    <h5>${payment?.amount}</h5>
                    <h5 className={renderSwitch(payment.plan) === '0' ? 'no-border badge' : 'badge'}>{renderSwitch(payment.plan) === '0' ? '1' : renderSwitch(payment.plan)}</h5>
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
              );
            })}
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
