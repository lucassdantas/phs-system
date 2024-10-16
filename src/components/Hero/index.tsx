
type HeroProps = {
  pageTitle:string;
}
export const Hero = ({ pageTitle}:HeroProps) => {
  return (
    <section className='w-full text-center pt-6 flex flex-col items-center justify-center text-bold text-white min-h-[250px] bg-gradient-to-b from-blue-carneiro-e-carballido to-[#337aa2]'>
        <h1 className='text-5xl font-bold'>{pageTitle}</h1>
    </section>
  )
}
