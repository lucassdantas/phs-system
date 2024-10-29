import { LessonsType } from '@/types/lessons';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const updateLesson = async (id: number, lessonData: LessonsType): Promise<LessonsType> => {
    try {
        const response = await axios.put(`${backendUrl}/controllers/lessonController.php?action=updateLesson&id=${id}`, lessonData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar a aula com ID ${id}:`, error);
        throw error;
    }
};
