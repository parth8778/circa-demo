type InitialState = {
  loginState: LoginState;
  residents: ResidentsState;
  dashboard: DashboardState
  selectedLease: SelectedLeaseState;
};

type SelectedLeaseState = {
  additionalDetails?: any;
  failedPayments?: [];
  leaseId?: number;
  unitDisplayName?: string;
  unitPrimaryDisplayName?: any;
  upcomingPayments?: any;
  selectedLeaseLoading?: boolean;
}

type DashboardState = {
  code?: number;
  currentLeases?: CurrentLeases[];
  failedLeases?: [];
  pastLeases?: [];
  pausedLeases?: [];
  pendingLeases?: [];
  dashboardLoading: boolean;
  errordescription?: any;
  status?: string;
  error?: any;
}

type CurrentLeases = {
  additionalDetails: any;
  failedPayments: [];
  leaseId: number;
  unitDisplayName: string;
  unitPrimaryDisplayName: any;
  upcomingPayments: any;
}

type LoginState = {
  isLoading: boolean;
  error?: any;
  data?: any;
}

type ResidentsState = {
  code?: number;
  errordescription?: any;
  isResidentLoading?: boolean;
  residentData?: {
    azAdId?: string;
    emailId?: string;
    firstName?: string;
    id?: number;
    lastName?: string;
    primaryPhoneNumber?: string;
    secondaryPhoneNumber?: string;
  }
  isResidentLoading: boolean;
}

type LoginAction = {
  type: string;
  request: ILoginRequest
};

interface ILoginRequest {
  email: string;
  password: string;
}

type DispatchType = (args: InitialState) => InitialState;
