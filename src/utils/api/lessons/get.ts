import { LessonsType } from '@/types/lessons';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const getLessons = async (): Promise<LessonsType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/lessonController.php?action=getAllLessons`);
        return response.data;
    } catch (error) {
        console.error("Erro ao obter todas as aulas:", error);
        throw error;
    }
};

export const getLessonById = async (id: number, columnIdentifier:string = 'lesson_id'): Promise<LessonsType[]> => {
    try {
        const response = await axios.get(`${backendUrl}/controllers/lessonController.php?action=getLessonById&id=${id}&columnIdentifier=${columnIdentifier}`);
        console.log(response)
        return response.data;
    } catch (error) {
        console.error(`Erro ao obter a aula com ID ${id}:`, error);
        throw error;
    }
};


