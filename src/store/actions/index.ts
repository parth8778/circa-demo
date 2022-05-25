import { LOGIN } from "./types";
import TutorialDataService from "../../services/api.service";
export const login =
  (payload: any) => async (dispatch: any) => {
    try {
      const res = await TutorialDataService.login({
        client_id: '742dbeaa-009e-425b-875b-cb2dcc18fee4',
        grant_type: 'password',
        response_type: 'token id_token',
        scope: 'openid 742dbeaa-009e-425b-875b-cb2dcc18fee4 offline_access profile',
        username: 'sabarish.kumar@usistech.com',
        password: 'aA8870542848',
      });
      dispatch({
        type: LOGIN,
        payload: res.data,
      });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
