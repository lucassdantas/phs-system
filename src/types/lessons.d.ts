import { ClassesType } from "@/types/classes";

export interface LessonsType {
  id:number;
  video: string;
  class: ClassesType|string;
  level: string;
  title: string;
  extra:{
    pdf:string;
    slide:string;
    sheet:string;
  }
}