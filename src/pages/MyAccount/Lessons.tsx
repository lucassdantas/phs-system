import { LessonsCard } from '@/components/LessonsCard';

export const Lessons = () => {
  const lssons: any[] = [
    { phase: 1, date: 'NOVEMBRO DE 2024', title: 'Sistema PHS - Performance & Health System', author: 'Luiz Felipe' },
    { phase: 1, date: 'NOVEMBRO DE 2024', title: 'Linhas Funcionais', author: 'William Rosa' },
    { phase: 1, date: 'NOVEMBRO DE 2024', title: 'Mobilidade e Estabilidade', author: 'William Rosa' },
    { phase: 2, date: 'NOVEMBRO DE 2024', title: 'Curso Avançado Fase 2', author: 'Autor Desconhecido' },
    // Adicione mais cursos conforme necessário
  ];
  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Cursos</h1>
    {[1, 2].map((phase) => (
      <div key={phase}>
        <h2 className="text-xl font-bold text-blue-800 mb-2">Fase {phase}</h2>
        <div className="flex flex-wrap">
          {lssons.filter(lesson => lesson.phase === phase).map((lesson, index) => (
            <LessonsCard
              key={index}
              phase={lesson.phase}
              date={lesson.date}
              title={lesson.title}
              author={lesson.author}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
  )
}
