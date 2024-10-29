import { LessonsType } from '@/types/lessons'

export const LessonsCard = ({lesson}:{lesson:LessonsType}) => {
  return (
    <div>
      aaaaaa
      {lesson.video_url}
      {lesson.title}
      {lesson.supplementary_material.pdf}
    </div>
  )
}
