export const handleTotalPages = (classQuantities:number, queryResultLimit:number, setTotalPages:any) => {
  const pagesQuantity = (classQuantities/queryResultLimit)
  if(pagesQuantity % 1 != 0 )  return setTotalPages(Math.trunc(pagesQuantity)+1)
  return setTotalPages(pagesQuantity)
}

export const handlePageChange = (pageNumber:number, totalPages:number, queryResultLimit:number, setOffSetQueryResults:any, setCurrentPage:any) => {
  if(pageNumber > totalPages || pageNumber < 1 ) return;
  setOffSetQueryResults((pageNumber-1)*queryResultLimit)
  setCurrentPage(pageNumber)
}