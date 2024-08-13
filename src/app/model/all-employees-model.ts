export interface AllEmployeesModel {
  message: string;
  result: boolean;
  data:Data[];
}

interface Data {
  employeeId: number;
  employeeName: string;
  deptId: number;
  deptName: string;
  contactNo: string;
  emailId: string;
  role: string;
}
