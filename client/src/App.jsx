import './App.css'
import {Routes, Route} from 'react-router-dom';
//componentes
import Lpage from './views/LandingPage/Lpage';
import Home from './views/Home/home';
import DetailPage from './views/DetailPage/detail';
import FormPage from './views/FormPage/formPage';
import About from './views/About/about';


function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Lpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/form' element={<FormPage />} />
        <Route path='/AboutUS' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
