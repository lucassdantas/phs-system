import { LessonsType } from '@/types/lessons'

export const LessonsCard = ({lesson}:{lesson:LessonsType}) => {
  return (
    <div className='rounded-lg flex flex-col items-center lg:w-1/3 w-full bg-green-phs-system'>
      {lesson.video_url}
      {lesson.title}
      {lesson.supplementary_material.pdf}
    </div>
  )
}
