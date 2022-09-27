import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dodbogi, Dokjum, Freeboard, Janbaguni, Kogaekjiwon, Main, Signin, Store, StoreAccessory, StoreAirpods, StoreiPad, StoreiPhone, StoreMac, StoreTV, StoreWatch } from './page';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const User = axios.get("http://localhost:3001/member").then((e) => {
    return JSON.stringify(e)
  }).catch((error) => {
    console.log(error)
  })
  console.log(User)
  const [login, Loginch] = useState(false);
  const LoginCheck = () => {
    return login === true ? <Store /> : <Navigate to={"/"} />
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/Mac' element={<StoreMac />} />
        <Route path='/store/iPad' element={<StoreiPad />} />
        <Route path='/store/iPhone' element={<StoreiPhone />} />
        <Route path='/store/Watch' element={<StoreWatch />} />
        <Route path='/store/Airpods' element={<StoreAirpods />} />
        <Route path='/store/TV' element={<StoreTV />} />
        <Route path='/store/accessory' element={<StoreAccessory />} />
        <Route path='/kogaekjiwon' element={<Kogaekjiwon />} />
        <Route path='/board' element={<Freeboard user={User} />} />
        <Route path='/dodbogi' element={<Dodbogi />} />
        <Route path='/jangbaguni' element={<Janbaguni />} />
        <Route path='/dokjum' element={<Dokjum />} />
        <Route path='/login' element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
