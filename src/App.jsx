import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './screens/Home'
import './styles/main.scss'
import CardsScreen from './screens/CardsScreen'
import NotFound from './screens/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cardsScreen/:title' element={<CardsScreen />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;