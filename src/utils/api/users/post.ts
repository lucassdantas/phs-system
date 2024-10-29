import { UsersType } from '@/types/users';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const createUser = async (userData: UsersType): Promise<UsersType> => {
    try {
        const response = await axios.post(`${backendUrl}/controllers/userController.php?action=createUser`, userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar o novo usuário:", error);
        throw error;
    }
};
