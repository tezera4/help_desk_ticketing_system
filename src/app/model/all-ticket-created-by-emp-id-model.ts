export interface AllTicketCreatedByEmpIdModel {
    message: string;
    result: boolean;
    data:AllTicketCreatedByEmpIdModelData[]
    
  }
  export interface AllTicketCreatedByEmpIdModelData{
    ticketId: number;
        createdDate: string;
        expectedEndDate: string;
        state: string;
        severity: string;
        contactNo: string;
        ticketNo: string;
        deptName: string;
        createdByEmployee: string;
        assignedToEmployee: string;
        childCategory: string;
        parentCategory: string;
        completedDate: string;

  }

  