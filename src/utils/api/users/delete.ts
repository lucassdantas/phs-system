import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const deleteUser = async (id: number): Promise<void> => {
    try {
        await axios.delete(`${backendUrl}/controllers/userController.php?action=deleteUser&id=${id}`);
    } catch (error) {
        console.error(`Erro ao deletar o usuário com ID ${id}:`, error);
        throw error;
    }
};
