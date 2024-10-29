import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deleteClass = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/classController.php?action=deleteClass&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar a turma com ID ${id}:`, error);
        throw error;
    }
};
