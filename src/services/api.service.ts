import axios from "axios";
import { AppConfig } from "../configs/app.config";
class ApiService {
  login(payload: ILoginRequest) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;",
        Cookie:
          "x-ms-cpim-sso:deveppopay.onmicrosoft.com_0=m1.Ux1P6Bb+IFOZq1d1.0KTY+w6nnvZiIaYHAevIjQ==.0./dHDHv8WKuWCFemi9n56g65/gVURFEAhrHbGcMi8MEoeqK8RRIL65aRjPiM+nDvUI6ondkvR08bnSJtA/Q+M5JSRUWKu4OtuvodpQqeu3OO/0Ija3gDRA5E2ybjnCvkoSZtTtWUUpXmll9i3AFU/oBUOmDqXTBJF1NK6SSp0doq1/ixA7ZGuLwESzOd7LZqmyrq6vB0BpaN5JrEAW0unpNldY991wXDTNzDMPTgYNP8=",
      },
    };
    return axios.post(`${AppConfig.authBaseURL}/token`, new URLSearchParams({
      client_id: '742dbeaa-009e-425b-875b-cb2dcc18fee4',
      grant_type: 'password',
      response_type: 'token id_token',
      scope: 'openid 742dbeaa-009e-425b-875b-cb2dcc18fee4 offline_access profile',
      username: payload?.email, // 'sabarish.kumar@usistech.com',
      password: payload?.password // 'aA8870542848',
    }), config);
  }

  getResidents() {
    const tokens = localStorage.getItem('authTokens');
    if (tokens) { 
      let config = {
        headers: {
          Authorization: 'Bearer '+ JSON.parse(tokens)?.id_token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      }
      return axios.get(`${AppConfig.apiBaseURL}/residents`, config);
    }
  }

  getDashboard(residentId: number) {
    const tokens = localStorage.getItem('authTokens');
    if (tokens) { 
      let config = {
        headers: {
          Authorization: 'Bearer '+ JSON.parse(tokens)?.id_token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      }
      return axios.get(`${AppConfig.apiBaseURL}/residents/${residentId}/dashboard`, config);
    }
  }
}
export default new ApiService();
