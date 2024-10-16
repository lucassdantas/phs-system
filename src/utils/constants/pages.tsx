import { ReactElement } from "react";
import {Policy} from "@/pages/Policy";
import {Terms} from "@/pages/Terms";
import { Login } from "@/pages/Login";
import { MyAccount } from "@/pages/MyAccount";
import { Lessons } from "@/pages/Lessons";

export type PageType = {
  title:string;
  url:string;
  component:ReactElement;
  showOnHeader?:boolean;
}
export const pages:PageType[] = [
  {
    title:'Login',
    url:'/',
    component:<Login/>,
    showOnHeader:true
  },
  {
    title:'Palestras',
    url:'/',
    component:<Lessons/>,
    showOnHeader:true
  },
  {
    title:'Minha conta',
    url:'/minha-conta',
    component:<MyAccount/>,
    showOnHeader:true
  },
  
  {
    title:'Política de privacidade',
    url:'/politica-de-privacidade',
    component:<Policy/>,
    showOnHeader:false,
  },
  {
    title:'Termos e condições de uso',
    url:'/termos-e-condicoes',
    component:<Terms/>,
    showOnHeader:false,
  },
]