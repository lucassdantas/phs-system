import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import { pages, PageType } from '@/utils/constants/pages'

function App() {

  return (
    <Router>
      <Routes>
        {pages.map((page:PageType) => <Route path={page.url} element={page.component} key={page.url} />)}
      </Routes>
    </Router>
  )
}

export default App
