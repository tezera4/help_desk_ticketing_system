export interface AllTicketAssignedToLoggedInUserModel {
  message: string;
  result: boolean;
  data: AllTicketAssignedToLoggedInUserDataModel[];
}

interface AllTicketAssignedToLoggedInUserDataModel {
  completedDate: string;
  createdDate: string;
  employeeId: number;
  employeeName: string;
  expectedEndDate: string;
  state: string;
  ticketId: number;
  ticketNo: string;
  severity: string;
  childCategroyName: string;
  parentCategoryName: string;
  requestDetails: string;
}
