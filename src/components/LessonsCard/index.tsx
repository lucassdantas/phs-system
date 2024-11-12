import { Button } from '@/components/Button';
import { LessonsType } from '@/types/lessons'
import { userImagesDirectory } from '@/utils/constants/siteInfos';
interface LessonCardProps {
  lesson:{
    phase: number;
    date: string;
    title: string;
    author: string;
    img:string;
  };
}
export const LessonsCard = ({lesson}:LessonCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg lg:w-[30%] w-full m-4 h-[480px]">
      <div className='rounded-t-xl'>
        <div className="flex mt-4 ml-4 absolute justify-center gap-4 items-center py-2 px-4 w-fit  text-white rounded-full bg-medium-blue-phs-system">Fase {lesson.phase}</div>
        <img src={userImagesDirectory+'default-image/placeholder-image.jpg'} alt="Foto da aula" className='rounded-t-xl'/>
      </div>
      <div className="h-[50%] relative flex flex-col justify-between items-start px-6 pt-12 mb-8">
        <p className='text-medium-blue-phs-system uppercase text-sm'>Novembro de 2024</p>
        <h4 className="text-lg font-medium mt-2">{lesson.title}</h4>
        <p className="text-sm text-medium-green-phs-system mt-4 mb-8">Por: {lesson.author}</p>
        <Button color='blue' content='Iniciar cursos'/>
      </div>
    </div>
  )
}
