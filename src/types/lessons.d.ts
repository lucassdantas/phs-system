import { ClassesType } from "@/types/classes";

export interface LessonsType {
  lesson_id:number;
  instructor_id:number;
  author_id:number;
  class_id:number;
  phase_id:number;
  title:string;
  description:string;
  video_url:string;
  supplementary_material:{
    pdf:string;
    slide:string;
    sheet:string;
  }
}
