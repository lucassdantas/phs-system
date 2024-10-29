import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deleteLesson = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/lessonController.php?action=deleteLesson&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar a aula com ID ${id}:`, error);
        throw error;
    }
};
