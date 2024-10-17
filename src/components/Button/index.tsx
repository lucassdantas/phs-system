import { IoLogoWhatsapp } from "react-icons/io5";

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
}

export const Button = ({content = 'Agendar consulta', target='_self', fontSize='base'}:ButtonProps) => {
  return (
    <a href='#' target={target} className="flex relative p-3  bg-green-500 rounded-xl  text-white font-bold items-center text-center justify-center gap-2 shadow-sm hover:bg-green-400 cursor-pointer transition duration-300 hover:scale-110">
      <IoLogoWhatsapp className='text-xl'/> <span className={`text-${fontSize} uppercase`}>{content}</span>
    </a>
  )
}
