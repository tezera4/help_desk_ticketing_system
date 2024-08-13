export interface CreateNewTicketModel {
    employeeId: number;
    severity: string;
    childCategoryId: number;
    deptId: number;
    requestDetails: string
  }