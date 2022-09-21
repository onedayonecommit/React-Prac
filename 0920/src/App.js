import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Login, Shop, Detail } from './page'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/detail/:id/:num/:name' element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
