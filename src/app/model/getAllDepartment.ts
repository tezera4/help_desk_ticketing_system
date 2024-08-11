export interface GetAllDepartment
{
    message:string;
    result:boolean;
    data:Data[]

}

export interface Data{
    deptId: number,
      deptName: string,
      deptHeadName: string,
      deptHeadEmpId: number,
      createdDate: Date
}