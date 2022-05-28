import apiService from "../services/api.service";
import * as actionTypes from "./actions";
import notification from "antd/lib/notification";

export const doLogin = (request: ILoginRequest) => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.DO_LOGIN,
    });
    apiService
      .login(request)
      .then((data) => {
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        notification.error({
          message: "Error",
          description: "Unauthorized User.",
        });
        dispatch({
          type: actionTypes.LOGIN_FAILED,
          error,
        });
      });
  };
};

export const getResidents = () => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_RESIDENT,
    });
    apiService
      .getResidents()
      ?.then((data) => {
        dispatch({
          type: actionTypes.GET_RESIDENT_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        kickOutUser(error);
        dispatch({
          type: actionTypes.GET_RESIDENT_FAILED,
          error,
        });
      });
  };
};

export const getDashboard = (residentId: number) => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.GET_DASHBOARD,
    });
    apiService
      .getDashboard(residentId)
      ?.then((data) => {
        dispatch({
          type: actionTypes.GET_DASHBOARD_SUCCESS,
          data,
        });
      })
      .catch((error) => {
        kickOutUser(error);
        dispatch({
          type: actionTypes.GET_RESIDENT_FAILED,
          error,
        });
      });
  };
};

export const onLeaseSelect = (selectedLease: any) => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.SELECTED_LEASE,
      data: selectedLease
    });
  };
};

export const resetAuthState = () => {
  return (dispatch: any) => {
    dispatch({
      type: actionTypes.RESET_AUTH_STATE
    });
  };
};


function kickOutUser(error: any) {
  if (error?.response?.status === 401) {
    localStorage.clear();
    window.location.href = '/';
    notification.error({
      message: "Error",
      description: "Token Expired!",
    });
  };
}