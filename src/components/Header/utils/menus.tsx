export const lessonsDropdownMenu = {
  mainMenu:{
    route:'/aulas',
    content:'Aulas'
  },  
  dropdownItems:[
    {route:'/aulas/fase1', content:'Fase 1'},
    {route:'/aulas/fase2', content:'Fase 2'},
  ]
}
export const adminDropdownMenu = {
  mainMenu:{
    route:'/admin',
    content:'Área administrativa'
  },  
  dropdownItems:[
    {route:'/admin/add-lesson', content:'Adicionar aula'},
    {route:'/admin/add-class',  content:'Adicionar turma'},
    {route:'/admin/add-instructor', content:'Adicionar instrutor'},
  ]
}