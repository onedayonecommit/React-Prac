import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main, Shop } from './page';
import { Header } from './components'
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
