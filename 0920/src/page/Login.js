import React from 'react'
import { Header, Body } from '../com'

const Login = (props) => {
    const setLogin = () => {
        props.login(true);
    }
    return (
        <div>
            <Header title="로그인 페이지" />
            <Body path="/shop" name="상점 페이지" islogin={props.islogin} />
            <Body path="/mypage" name="마이 페이지" islogin={props.islogin} />
            <button onClick={setLogin}>로그인</button>
        </div>
    )
}

export default Login