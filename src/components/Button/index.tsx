import { IoLogoWhatsapp } from "react-icons/io5";

type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
  buttonProps?:any;
  onClick?: () => void;
}

export const Button = ({content = 'Visualizar', target='_self', fontSize='base', ...buttonProps}:ButtonProps) => {
  return (
    <a target={target} {...buttonProps} className="py-2 px-4 bg-medium-green-phs-system rounded-full text-white text-center shadow-sm hover:bg-light-green-phs-system cursor-pointer transition duration-300 hover:scale-110">
      <span className={`text-${fontSize}`}>{content}</span>
    </a>
  )
}
