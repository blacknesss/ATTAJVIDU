import './css/main.css';
import './css/nav.css';
import './css/footer.css';
import './css/taj.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import ArabicAlf from './components/ArabicAlf';
import TajvidRools from './components/TajvidRools';
import Suras from './components/Suras';

function App() {
  return (
    <div className='rodak'>
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/arabicAlf' element ={<ArabicAlf/>}/>
        <Route path='/tajvidRools' element = {< TajvidRools/>}/>
        <Route path='/suras' element = {< Suras/>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
