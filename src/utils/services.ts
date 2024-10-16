import { ServiceType } from "@/types/services";
import accountingService from '@/assets/_img/contabilidade.jpg';
import companiesService from '@/assets/service-image-opening-and-legalization-of-companies.jpg';
import costAccountingServiceImage from '@/assets/_img/regularizacao.jpg';
import personalDepartment from '@/assets/_img/departamento.jpg';
import regularizationImage from '@/assets/regularization-service-image.jpg';
import { getIconsByTitle, iconsData } from "@/utils/iconsData";
export const services:ServiceType[] = [
  {
    title:'Soluções Contábeis',
    img:accountingService,
    topics:[
      'Acompanhamento dos dispositivos legais vigentes',
      'Análise de relatórios contábeis',
      'Cálculo de Depreciação do Imobilizado',
      'Classificação da documentação contábil',
      'Confecção de livro diário impresso ou digital (SPED ECD)',
      'Consultoria contábil',
      'Contabilidade digital',
      'Elaboração de Plano de Contas;',
      'Elaboração de relatórios contábeis',
      'Escrituração contábil',
    ],
    resume:'Área responsável por todo o processamento, registro e análise das informações e documentos da empresa, necessários para a elaboração de relatórios gerenciais que serão utilizados pelos gestores.',
    benefits:[
      ...getIconsByTitle(iconsData, ['Economia', 'Estratégia', 'Segurança', 'Tranquilidade'])
    ]

  },
  {
    title:'Legalização de Empresas',
    img:companiesService,
    topics:[
      'Cadastros para licitações',
      'Criação e registro de empresas',
      'Elaboração e registro de Atas',
      'Obtenção de Certidões',
      'Obtenção de licenças em órgãos federais',
      'Registros de alterações contratuais',
      'Registros de encerramentos de empresas'
    ],
    resume: 'Área responsável pelo nascimento do seu negócio. É a parte de registro e regularização da empresa nos ógãos competentes. A abertura de uma empresa necessita de todo um processo legal a ser seguido.',
    benefits:[
      ...getIconsByTitle(iconsData, ['Informação', 'Tranquilidade'])
    ]
  },
  {
    title:'Soluções Para Pessoas Físicas',
    img:regularizationImage,
    topics:[
      'Acompanhamento dos dispositivos legais vigentes',
      'Cálculo do IRRF',
      'Criação de MEI',
      'Elaboração da Declaração do Imposto de Renda Pessoa Física',
      'Elaboração de Carne Leão',
      'Elaboração de Ganho de capital',
      'Emissão das guias de recolhimento de impostos',
      'Obtenção de alvará para autônomo',
    ],
    resume: 'Atuamos na regularização fiscal e tributária para pessoas físicas, proporcionando segurança no cumprimento das obrigações e suporte especializado.',
    benefits:[
      ...getIconsByTitle(iconsData, ['Informação', 'Segurança', 'Tranquilidade'])
    ]

  },
  /*{
    title:'Departamento de Pessoal/RH (Soluções completas para Gestão de Pessoas e SST. Tudo para cuidar da sua equipe)',
    img:personalDepartment,
    topics:[
      'Admissão e Demissão: Contratação, integração, rescisão contratual e todos os trâmites legais.',
      'Consultoria Trabalhista: Orientação sobre legislação trabalhista, acordos coletivos e rotinas internas.',
      'Encargos Sociais: Cálculo e pagamento de INSS, FGTS e outros encargos trabalhistas.',
      'E-Social: Envio de informações ao governo de forma digital e segura.',
      'Folha de Pagamento: Cálculo preciso de salários, benefícios, encargos sociais e tributos.',
      'Gestão da segurança no trabalho - acompanhamento e controle do documentos legais exigidos pela legislação de acordo com o risco da empresa (PCMSO, PGR, LTCAT e exames médicos obrigatórios',
      'Gestão de Benefícios: Administração de planos de saúde, vale-transporte, seguro de vida e outros.',
      'Gestão de Ponto: Controle de jornada de trabalho e cálculo de horas extras.',
      'Relatórios e Análises: Elaboração de relatórios gerenciais e análises de dados para tomada de decisão.',
    ],
    resume:'Atendemos empresas dos mais variados segmentos, empresas escolares, terceiro setor e setor industrial (verificar uma maneira de incluir no site os segmentos que atendemos)',
    benefits:[iconsData[2] ,iconsData[7], iconsData[0]]

  */
  {
    title:'Soluções Fiscais',
    img:costAccountingServiceImage,
    topics:[
      'Acompanhamento da legislação fiscal',
      'Análise de custos',
      'Apuração de impostos e contribuiçoes',
      'Assessoria no atendimento à Intimações Fiscais',
      'Assessoria tributária de impostos Estaduais, Federais e Municipais',
      'Conferência do movimento fiscal (notas fiscais de vendas e de compras)',
      'Consultoria tributária',
      'Custos industriais',
      'Elaboração das guias de recolhimento de impostos e contribuições',
      'Emissão de Livros Fiscais',
      'Escrituração de Notas Fiscais de entradas, saídas e serviços',
      'Estrutura e Análise de preços de produtos e serviços',
      'Indices Gerenciais',
      'logística tributária e otimização de processos de controle fabril',
      'Margem de lucro por produto/serviço',
      'Parcelamento de Impostos e Contribuições',
      'Planejamento Tributário',
      'Preparação e entrega das obrigações acessórias mensais e anuais',
      'Regularização fiscal'
    ],
    resume: 'Área responsável pelos impostos e obrigações acessórias da empresa, observando as alterações na mudança da legislação tributária. Diagnóstico do seu negócio, acompanhado de orientações e sugestões tributárias nos âmbitos Federal, Estadual e Municipal.',
    benefits:[
      ...getIconsByTitle(iconsData, ['Equilíbrio', 'Estratégia', 'Informação', 'Segurança'])
    ]
  },
  {
    title:'Soluções Para Gestão de Pessoas e SST',
    img:personalDepartment, 
    topics:[
      'Admissão e Demissão: Contratação, integração, rescisão contratual e todos os trâmites legais.',
      'Consultoria Trabalhista: Orientação sobre legislação trabalhista, acordos coletivos e rotinas internas.',
      'Encargos Sociais: Cálculo e pagamento de INSS, FGTS e outros encargos trabalhistas.',
      'E-Social: Envio de informações ao governo de forma digital e segura.',
      'Folha de Pagamento: Cálculo preciso de salários, benefícios, encargos sociais e tributos.',
      'Gestão da segurança no trabalho - acompanhamento e controle do documentos legais exigidos pela legislação de acordo com o risco da empresa (PCMSO, PGR, LTCAT e exames médicos obrigatórios)',
      'Gestão de Benefícios: Administração de planos de saúde, vale-transporte, seguro de vida e outros.',
      'Gestão de Ponto: Controle de jornada de trabalho e cálculo de horas extras.',
      'Relatórios e Análises: Elaboração de relatórios gerenciais e análises de dados para tomada de decisão.'
    ],
    resume: 'O Departamento de Pessoal é fundamental para o bom funcionamento de qualquer negócio. Temos tudo para cuidar da sua equipe.',
    benefits:[
      ...getIconsByTitle(iconsData, ['Informação', 'Segurança', 'Tranquilidade'])
    ]
  },
]