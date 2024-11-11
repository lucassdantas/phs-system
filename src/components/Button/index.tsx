
type ButtonProps = {
  content?:string; 
  url?:string;
  target?:string;
  fontSize?:string;
  buttonProps?:any;
  className?:string;
  color?:string;
  onClick?: () => void;
}

export const Button = ({content = 'Visualizar', target='_self', fontSize='base', className='', color='green', ...buttonProps}:ButtonProps) => {
  return (
    <a target={target} {...buttonProps} className={`${className} ${color === 'green' ? 'bg-medium-green-phs-system hover:bg-medium-blue-phs-system':'bg-medium-blue-phs-system hover:bg-medium-green-phs-system '} py-2 px-4 rounded-full text-white text-center shadow-sm cursor-pointer transition duration-300 hover:scale-110 `}>
      <span className={`text-${fontSize}`}>{content}</span>
    </a>
  )
}
