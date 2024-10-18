import { LessonsType } from '@/types/lessons'

export const LessonsCard = ({lesson}:{lesson:LessonsType}) => {
  return (
    <div>
      {lesson.video}
      {lesson.title}
      {lesson.extra.pdf}
    </div>
  )
}
