import { Hero } from '@/components/Hero';
import { LessonsCard } from '@/components/LessonsCard';
import { Section } from '@/components/Section';
import { Template } from '@/components/Template';
import { useAuth } from '@/hooks/UseAuth';
import { LessonsType } from '@/types/lessons';
import { getLessonById } from '@/utils/api/lessons/get';
import { useEffect, useState } from 'react';

export const Lessons = () => {
  const { user } = useAuth();
  const [lessons, setLessons] = useState<LessonsType[]>([]);
  console.log(lessons)
  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const lessonData = await getLessonById(user.phase_acquired_id, 'phase_id');
        setLessons(lessonData);
      } catch (error) {
        console.error('Erro ao obter aulas:', error);
      }
    };

    fetchLessons();
  }, [user.phase_acquired_id]);

  return (
    <Template pageTitle='Aulas'>
      <Hero pageTitle='Aulas' />
      <Section>
        <div className='w-full flex justify-center items-center py-12'>
          {Array.isArray(lessons) && lessons.map((lesson: LessonsType, i: number) => (
            <LessonsCard lesson={lesson} key={i} />
          ))}
        </div>
      </Section>
    </Template>
  );
};
