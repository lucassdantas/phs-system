import { backendUrl } from '@/utils/constants/siteInfos';
import { ClassChangeRequests } from '@/types/classChangeRequests';
import axios from 'axios';

export const getClassChangeRequestsWithMembers = async (limit=10, offset=0): Promise<ClassChangeRequests> => {
  try {
      const response = await axios.get(`${backendUrl}/controllers/ClassChangeRequestController.php?action=getClassChangeRequestsWithMembers&limit=${limit}&offset=${offset}`);
      return JSON.parse(response.data);
  } catch (error) {
      console.error(`Erro ao obter as turmas com seus membros:`, error);
      throw error;
  }
};