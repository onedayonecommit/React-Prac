import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Dodbogi, Dokjum, Freeboard, Janbaguni, Main, Mypage, Searchid, Signin, Signup, Store, StoreAccessory, StoreAirpods, StoreiPad, StoreiPhone, StoreMac, StoreTV, StoreWatch, Writing } from './page';
import { useState } from 'react';
import axios from 'axios';


function App() {
  const [logincheck, setLogincheck] = useState(false);
  const LoginCheck = () => {
    return logincheck === true ? <Writing user_id={loginid} /> : <Navigate to={"/login"} />
  }
  const LoginCheck1 = () => {
    return logincheck === true ? <Mypage /> : <Navigate to={"/login"} />
  }
  const [loginid, setLoginid] = useState("");
  console.log(loginid)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main logincheck={logincheck} />} />
        <Route path='/store' element={<Store />} />
        <Route path='/store/Mac' element={<StoreMac />} />
        <Route path='/store/iPad' element={<StoreiPad />} />
        <Route path='/store/iPhone' element={<StoreiPhone />} />
        <Route path='/store/Watch' element={<StoreWatch />} />
        <Route path='/store/Airpods' element={<StoreAirpods />} />
        <Route path='/store/TV' element={<StoreTV />} />
        <Route path='/store/accessory' element={<StoreAccessory />} />
        <Route path='/mypage' element={<LoginCheck1 />} />
        <Route path='/board' element={<Freeboard />} />
        <Route path='/dodbogi' element={<Dodbogi />} />
        <Route path='/jangbaguni' element={<Janbaguni />} />
        <Route path='/dokjum' element={<Dokjum />} />
        <Route path='/login' element={<Signin logincheck={logincheck} setLogincheck={setLogincheck} loginid={loginid} setLoginid={setLoginid} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/search/appleid' element={<Searchid />} />
        <Route path='/freeboard/create' element={<LoginCheck />} />
      </Routes>
    </div>
  );
}

export default App;
