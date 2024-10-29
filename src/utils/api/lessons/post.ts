import { LessonsType } from '@/types/lessons';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const createLesson = async (lessonData: LessonsType): Promise<LessonsType> => {
    try {
        const response = await axios.post(`${backendUrl}/controllers/lessonController.php?action=createLesson`, lessonData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar a nova aula:", error);
        throw error;
    }
};
