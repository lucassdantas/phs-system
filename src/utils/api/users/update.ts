import { UsersType } from '@/types/users';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const updateUser = async (id: number, userData: UsersType): Promise<UsersType> => {
    try {
        const response = await axios.put(`${backendUrl}/controllers/userController.php?action=updateUser&id=${id}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Erro ao atualizar o usuário com ID ${id}:`, error);
        throw error;
    }
};
