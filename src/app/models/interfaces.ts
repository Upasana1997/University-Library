export interface bookInterface{   //(interfaces are light weight and are used for defining shapes and public is not used here)
     title:string;
     volume:number;
     author?:string;
     description?:string;
     version?:number;
     price?:number;
     subjectCategory?:string;
     entrydate: any;
}