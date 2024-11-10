import { LessonsType } from '@/types/lessons'
interface LessonCardProps {
  phase: number;
  date: string;
  title: string;
  author: string;
}
export const LessonsCard = ({ phase, date, title, author }:LessonCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 m-4">
      <div className="text-xl font-bold text-gray-800">Fase {phase}</div>
      <div className="mt-2 text-xs text-gray-500">{date}</div>
      <h2 className="text-lg font-bold mt-2">{title}</h2>
      <p className="text-sm text-gray-700 mt-1">Por: <span className="text-green-600">{author}</span></p>
      <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500">Iniciar curso</button>
    </div>
  )
}
