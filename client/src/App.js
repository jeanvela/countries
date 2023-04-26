import './App.css';
import { Route, Routes } from 'react-router-dom'
import Landing from './views/Landing';
import Home from './views/Home'
import CountryDetail from './views/Detail';
import Form from './views/Form';
import Activities from './views/Activities';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/countries/:id' element={<CountryDetail/>}/>
          <Route path='/activities' element={<Form/>}/>
          <Route path='/activity' element={<Activities/>}/>
        </Routes>
    </div>
  );
}

export default App;
