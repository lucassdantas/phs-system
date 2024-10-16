import { ReactElement } from "react";
import { Home } from '@/pages/Home';
import { About } from "@/pages/About";
import {Services} from "@/pages/Services";
import {Contact} from "@/pages/Contact";
import {Policy} from "@/pages/Policy";
import {Terms} from "@/pages/Terms";

export type PageType = {
  title:string;
  url:string;
  component:ReactElement;
  showOnHeader?:boolean;
}
export const pages:PageType[] = [
  {
    title:'Home',
    url:'/',
    component:<Home/>,
    showOnHeader:true
  },
  
  {
    title:'Serviços',
    url:'/servicos',
    component:<Services/>,
    showOnHeader:true
  },


  {
    title:'Conheça a CeC',
    url:'/conheca-a-cec',
    component:<About/>,
    showOnHeader:true
  },

  {
    title:'Contato',
    url:'/contato',
    component:<Contact/>,
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