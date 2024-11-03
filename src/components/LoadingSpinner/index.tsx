import { Oval } from 'react-loader-spinner'

type LoadingSpinnerProps = {
  size?:number
}
export const LoadingSpinner = ({size=50}:LoadingSpinnerProps) => {
  return (
    <div className='text-center flex justify-center w-full text-dark-green-phs-system'>
      <Oval width={size} />
    </div>
  )
}
