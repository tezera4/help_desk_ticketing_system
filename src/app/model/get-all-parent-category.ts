export interface GetAllParentCategory {
message: string ;
  result: boolean;
  data:dataCategory[];
}

export interface dataCategory{
    
    categoryName: string;
    deptName: string;
    categoryId: number;
}