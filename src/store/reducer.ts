import * as actionTypes from "./actions";

const initialState: InitialState = {
  loginState: {
    isLoading: false,
  },
  residents: {
    isResidentLoading: false,
  },
  dashboard: {
    dashboardLoading: false
  },
  selectedLease: {
    selectedLeaseLoading: true
  }
};

const reducer = (
  state: InitialState = initialState,
  action: any
): InitialState => {
  switch (action.type) {
    case actionTypes.DO_LOGIN:
      return {
        ...state,
        loginState: {
          isLoading: true,
        },
      };

    case actionTypes.LOGIN_SUCCESS:
      if (action?.data?.data) {
        localStorage.setItem('authTokens', JSON.stringify(action.data.data));
      }
      return {
        ...state,
        loginState: {
          isLoading: false,
          data: action?.data?.data,
        },
      };

    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        loginState: {
          isLoading: false,
          error: action,
        },
      };

    case actionTypes.GET_RESIDENT_SUCCESS: 
    return {
      ...state,
      residents: {
        isResidentLoading: false,
        ...action?.data?.data,
      },
    };

    case actionTypes.GET_DASHBOARD: 
    return {
      ...state,
      dashboard: {
        dashboardLoading: true,
      },
    };

    case actionTypes.GET_DASHBOARD_SUCCESS: 
    return {
      ...state,
      dashboard: {
        dashboardLoading: false,
        ...action?.data?.data,
      },
    };

    case actionTypes.GET_DASHBOARD_FAILED: 
    return {
      ...state,
      dashboard: {
        dashboardLoading: false,
        error: action,
      },
    };

    case actionTypes.SELECTED_LEASE: 
    return {
      ...state,
      selectedLease: {
        selectedLeaseLoading: false,
        ...action.data,
      },
    };

    case actionTypes.RESET_AUTH_STATE: 
    return {
      ...state,
      loginState: {
        isLoading: false,
      },
    };
  }
  return state;
};

export default reducer;
