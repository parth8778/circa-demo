import { Row, Col, notification } from "antd";
import LeaseDropdown from "./components/LeaseDropdown";
import ActionInfoBox from "./components/ActionInfoBox";
import DueInfoBox from "./components/DueInfoBox";
import Payments from "./components/Payments";
import PlanDetails from "./components/PlanDetails";
import { useEffect } from "react";
import axios from "axios";

function Dashboard() {

  useEffect(() => {
    const tokens = localStorage.getItem('authTokens');
    if (tokens) {
      let config = {
        headers: {
          Authorization: 'Bearer '+ JSON.parse(tokens)?.id_token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      }
      axios.get('https://cors-anywhere.herokuapp.com/https://azapp-coreservices-dev-008.azurewebsites.net/api/v5/residents/1325/dashboard', config)
      .then(function (response: any) {
        console.log(response);
      })
      .catch(function (error: any) {
        console.log(error);
      });

      fetch('https://cors-anywhere.herokuapp.com/https://azapp-coreservices-dev-008.azurewebsites.net/api/v5/residents', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer '+ JSON.parse(tokens)?.id_token, 
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      }).then(response => response.json())
      .then(data => {
        console.log('results: ', data);
        if (data?.error) {
          const { error, error_description } = data;
          notification['error']({
            message: error,
            description: error_description,
          });
          return;
        }
      }).catch((e) => {
        console.log('e: ', e);
      });
    }
  });

  return (
    <div className="dashboard-container">
      <LeaseDropdown></LeaseDropdown>
      <Row gutter={40}>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <ActionInfoBox></ActionInfoBox>
        </Col>
      </Row>
      <Row gutter={40}>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <DueInfoBox></DueInfoBox>
          <Payments></Payments>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7}>
          <PlanDetails></PlanDetails>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
