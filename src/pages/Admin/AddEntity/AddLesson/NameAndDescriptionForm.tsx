import { useState } from "react";

type NameAndDescriptionFormProps = {
  lessonTitle:string,
  setLessonTitle:any,
  lessonDescription:string,
  setLessonDescription:any
}
export const NameAndDescriptionForm = ({lessonTitle, setLessonTitle,lessonDescription, setLessonDescription }:NameAndDescriptionFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className='w-full my-4' id='nome-e-descricao'>
      <fieldset className="gap-4 w-full">
        <div className="mb-4 w-full">
          <input
            id="lessonTitle"
            type="text"
            value={lessonTitle}
            maxLength={254}
            onChange={(e) => setLessonTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Título da aula"
          />
        </div>
        <div className="mb-6 w-full">
          <textarea
            id="lastName"
            maxLength={254}
            value={lessonDescription}
            onChange={(e) => setLessonDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg mt-1 h-[150px] flex items-start focus:outline-none focus:ring-2 focus:ring-light-blue-phs-system focus:border-transparent"
            placeholder="Descrição da aula"
          ></textarea>
        </div>
      </fieldset>
      <button type="submit" className="p-4 bg-medium-blue-phs-system text-white py-2 rounded-full hover:bg-medium-green-phs-system transition-colors"> Salvar</button>
    </form>
  );
};
