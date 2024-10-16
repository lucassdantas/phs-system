import { Icons } from "@/types/icons";
import relaxingIcon from '@/assets/icons/icone-tranquilidade.png'
import sustentabilityIcon from '@/assets/icons/icone-sustentabilidade.png'
import securityIcon from '@/assets/icons/icone-seguranca.png'
import strategyIcon from '@/assets/icons/icone-estrategia.png'
import economyIcon from '@/assets/icons/icone-economia.png'
import modernityIcon from '@/assets/icons/icone-modernidade.png'
import balanceIcon from '@/assets/icons/icone-equilibrio.png'
import informationIcon from '@/assets/icons/icone-informacao.png'

import relaxingImage from '@/assets/icons/icon-images/tranquilidade.jpg'
import sustentabilityImage from '@/assets/icons/icon-images/sustentabilidade.jpg'
import securityImage from '@/assets/icons/icon-images/seguranca.jpg'
import strategyImage from '@/assets/icons/icon-images/estrategia.jpg'
import economyImage from '@/assets/icons/icon-images/economia.jpg'
import modernityImage from '@/assets/icons/icon-images/modernidade.jpg'
import balanceImage from '@/assets/icons/icon-images/equilibrio.jpg'
import informationImage from '@/assets/icons/icon-images/informacao.jpg'


export const iconsData:Icons[] = [
  {
    icon:relaxingIcon,
    image:relaxingImage,
    title:'Tranquilidade',
    content:'A Criação de um negócio bem sucedido envolve boa estratégia, táticas eficazes e um cuidadoso equilíbrio entre as tomadas de decisão. Adquira nossos serviços e fique tranquilo para desenvolver sua empresa.'
  },
  {
    icon:sustentabilityIcon,
    image:sustentabilityImage,
    title:'Sustentabilidade',
    content:'Manter a contabilidade de sua empresa transparente e em ordem é uma prática essencial para a sustentabilidade de seu empreendimento, sendo assim nossa estratégia de sustentabilidade será sem dúvidas um componente essencial para ampliar os resultados de sua empresa de forma duradoura.',
  },
  {
    icon:securityIcon,
    image:securityImage,
    title:'Segurança',
    content:'Oferecemos a segurança de manter sua empresa com todas as obrigações tributárias fiscais em ordem e sempre atualizada com as alterações na legislação.',
  },
  {
    icon:strategyIcon,
    image:strategyImage,
    title:'Estratégia',
    content:'Nossa estratégia é oferecer uma gama de serviços que se adapte de acordo com o formato de cada negócio, com informações, simples, precisas e eficientes, de maneira a viabilizar o gerenciamento das empresas através do nosso conhecimento.'
  },
  {
    icon:economyIcon,
    image:economyImage,
    title:'Economia',
    content:'Seja nosso parceiro e gaste seu tempo gerindo sua empresa. Terceirizamos as áreas administrativa, contábil, tributária e trabalhista, desta forma a sua empresa poderá focar os seus esforços e recursos para potencializar a atividade fim de seu negócio.'
  },
  {
    icon:modernityIcon,
    image:modernityImage,
    title:'Modernidade',
    content:'Organização e planejamento é o que o seu negócio precisa para seguir rumo ao futuro crescendo de forma saudável'
  },
  {
    icon:balanceIcon,
    image:balanceImage,
    title:'Equilíbrio',
    content:'Não basta ter várias ideias, temos a melhor solução para você e sua empresa. As informações contábeis são fundamentais para auxílio no crescimento e no equilíbrio financeiro da empresa.'
  },
  {
    icon:informationIcon,
    image:informationImage,
    title:'Informação',
    content:'Com uma equipe dinâmica temos a solução rápida, precisa e moldada para seu negócio.'
  },
]

export const getIconsByTitle = (icons:Icons[], titles:string[]):(Icons | string)[] => {
  let filteredIcons:(Icons|string)[] = []
  titles.forEach(title => {
    icons.forEach(icon => {
      if(icon.title === title) filteredIcons.push(icon)
    })
  })
  if(filteredIcons.length === 0) filteredIcons = ['Nenhum ícone encontrado']
  return filteredIcons
}