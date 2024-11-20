import { useState } from "react";

export const LessonPhaseForm = ({selectedPhase, setSelectedPhase}:{selectedPhase:string, setSelectedPhase:any}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='w-full my-4' id='fase'>
      <fieldset className="gap-4 w-full">
        <div className="mb-4 w-full ">
          <label htmlFor='lessonPhase'>Marque a fase do seu curso</label>
          <div className="flex text-left gap-4">
            <input
              id="phase1"
              type="radio"
              name='lessonPhase'
              value='Fase 1'
              onChange={(e) => setSelectedPhase(e.target.value)}
              className=" "
            />
            <label htmlFor="phase1">Fase 1</label>
            <input
              id="phase2"
              type="radio"
              name='lessonPhase'
              value='Fase 2'
              onChange={(e) => setSelectedPhase(e.target.value)}
              className=" "
            />
            <label htmlFor="phase2">Fase 2</label>
          </div>
        </div>
        <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors"> Salvar</button>
      </fieldset>
    </form>
  );
};
