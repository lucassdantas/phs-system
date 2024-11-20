import { ComplementarMaterialsType } from '@/types/complementarMaterialsType';
import { backendUrl } from '@/utils/constants/siteInfos';
import axios from 'axios';

export const getComplementarMaterialsByLessonId = async (limit=10, offset=0, lessonId=0): Promise<ComplementarMaterialsType[]> => {
  try {
      const response = await axios.get(`${backendUrl}/controllers/LessonController.php?action=getComplementarMaterialsByLessonId&limit=${limit}&offset=${offset}&lessonId=${lessonId}`);
      return JSON.parse(response.data);
  } catch (error) {
      console.error(`Erro ao obter as aulas com seus membros:`, error);
      throw error;
  }
};

