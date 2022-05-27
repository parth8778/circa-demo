import { Row, Col, Spin } from "antd";
import LeaseDropdown from "./components/LeaseDropdown";
import ActionInfoBox from "./components/ActionInfoBox";
import DueInfoBox from "./components/DueInfoBox";
import Payments from "./components/Payments";
import PlanDetails from "./components/PlanDetails";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { getDashboard, getResidents } from "../../store/effect";

function Dashboard() {
  const dispatch: Dispatch<any> = useDispatch();
  const [dashboard, setDashboard] = useState<any>();
  const [isLoading, setLoading] = useState(false);

  const residentSubscription = useSelector(
    (state: InitialState) => state.residents
  );

  useEffect(() => {
    if (residentSubscription?.residentData) {
      dispatch(getDashboard(residentSubscription.residentData.id || 0));
    }
  }, [dispatch, residentSubscription]);

  const dashboardSubscription = useSelector(
    (state: InitialState) => state.dashboard
  );
  useEffect(() => {
    setDashboard(dashboardSubscription);
    setLoading(dashboardSubscription.dashboardLoading);
  }, [dashboardSubscription]);

  useEffect(() => {
    dispatch(getResidents());
  }, [dispatch]);

  return (
    <div className="dashboard-container">
      <LeaseDropdown currentLeases={dashboard?.dashboard?.currentLeases}></LeaseDropdown>
      <Row gutter={40}>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <Spin tip="Loading..." spinning={isLoading}> 
            <ActionInfoBox></ActionInfoBox>
          </Spin>
        </Col>
      </Row>
      <Row gutter={40}>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <Spin tip="Loading..." spinning={isLoading}> 
            <DueInfoBox></DueInfoBox>
          </Spin>
          <Spin tip="Loading..." spinning={isLoading}> 
            <Payments></Payments>
          </Spin>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <Spin tip="Loading..." spinning={isLoading}> 
            <PlanDetails></PlanDetails>
          </Spin>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
