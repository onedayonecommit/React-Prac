import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main, Login, Shop, Detail, Mypage } from './page'
import { useState } from 'react';
function App() {
  // 로그인이 되었는지 확인할 useState 함수
  // 페이지를 접속할 때 권한이 필요해서 막아야할 페이지 처리
  // 페이지 보호하기 위해 리다리엑
  // Navigate 라는 컴포넌트 사용해서 리다이렉트를 하게 만들어 줄 수 있음.
  // react-router-dom 이 지원하는 컴포넌트
  // props를 받는데 to 한개만 주면 됨 => 보내주고 싶은 경로
  const [login, setLogin] = useState(false);
  // 로그인 안되있으면 메인페이지로 이동
  const Redirect = () => {
    return login === true ? <Mypage /> : <Navigate to='/' />
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main islogin={login} />} />
        <Route path='/login' element={<Login login={setLogin} islogin={login} />} />
        <Route path='/shop' element={<Shop islogin={login} />} />
        <Route path='/detail/:id/:num/:name' element={<Detail islogin={login} />} />
        <Route path='/mypage' element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
