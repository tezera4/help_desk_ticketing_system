export interface AllChildCategoryModel {
    message: string;
    result: boolean;
    data:dataList[];
}


interface dataList {
    categoryName: string;
    parentCategoryName: string;
    childCategoryId: number;
  }
