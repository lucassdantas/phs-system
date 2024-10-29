import { LessonsType } from "@/types/lessons";
import { getLessons } from "@/utils/api/lessons/get";

export const lessons:LessonsType[] = getLessonsById()[
  {
    id:0,
    video:'link-do-video',
    class: 'nov',
    level: '1',
    title:'Título',
    extra:{
      pdf:'link-do-pdf',
      slide:'link-do-slide',
      sheet:'link-da-planilha'
    },
  }
]