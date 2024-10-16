import { Icons } from "@/types/icons";

export interface ServiceType{
  img:string;
  title:string;
  topics:string[];
  resume:string;
  benefits:(Icons | string)[];
}