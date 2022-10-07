import React, { useRef, useState } from 'react'
import { Button, ContentBtn, HeaderContent, HeaderWrap, Logininput, LoginWrap } from './styledComponent';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../../redux/middleware/loginAction';
import { useDispatch, useSelector } from 'react-redux';

const Header = (props) => {

    const idInput = useRef();
    const pwInput = useRef();
    const dispatch = useDispatch();
    // 리액트에서 태그 선택해야하는데 document.queryselector 이런거 대신 사용 하는 것
    // useRef 함수는 current 속성을 가지고 있는 객체를 반환한다.
    // 객체에 원하는 키값에 값을 넣어줄 수 도 있고,
    // 이 값이 바뀌어도 렌더링은 되지 않지만 값은 게속 남아있음 (state마냥)
    // current = 태그가 들어옴
    // 사용방법은 들고있고 싶은 컴포넌트에 ref props로 useRef() 반환한 객체를 넣어줌


    // 로그인 할 수 있는 상태와 회원가입 할 수 있는 상태를 나눠주기 위함
    const [wrapState, setWrapState] = useState(true);
    const userName = useSelector(state => state.loginReducer.id);
    const login = () => {
        // console.log(idInput)
        // console.log(pwInput)
        // idInput.current.value = '';
        // pwInput.current.value = '';
        dispatch(loginAction.login(idInput.value, pwInput.value))
    }

    const logout = () => {
        dispatch(loginAction.logOut());
    }

    const signup = () => {
        dispatch(loginAction.signUp(idInput.value, pwInput.value, loglog))
    }
    const nav = useNavigate();

    const loglog = () => { // setWrap()
        // idInput.value = '';
        // pwInput.value = '';
        idInput.current.value = '';
        pwInput.current.value = '';
        setWrapState(!wrapState)
    }

    return (
        <HeaderWrap>
            <HeaderContent>
                <ContentBtn onClick={() => { nav("/") }}>Main</ContentBtn>
                <ContentBtn onClick={() => { nav("/shop") }}>Shop</ContentBtn>
            </HeaderContent>
            <LoginWrap>
                {props.isLogin ?
                    <>
                        <div>{userName} 로그인 됨</div>
                        <Button onClick={logout}>로그아웃</Button>
                    </>
                    :
                    <>
                        {wrapState ?
                            <>
                                <label>아이디</label>
                                <Logininput ref={idInput} onChange={(e) => { idInput.value = e.target.value }}></Logininput>
                                <label>비밀번호</label>
                                <Logininput ref={pwInput} onChange={(e) => { pwInput.value = e.target.value }}></Logininput>
                                <Button onClick={login}>로그인</Button>
                                <Button onClick={loglog} > 회원가입</Button>
                            </>
                            :
                            <>
                                <label>아이디</label>
                                <Logininput ref={idInput} onChange={(e) => { idInput.value = e.target.value }}></Logininput>
                                <label>비밀번호</label>
                                <Logininput ref={pwInput} onChange={(e) => { pwInput.value = e.target.value }}></Logininput>
                                <Button onClick={signup}>회원가입</Button>
                                <Button onClick={loglog}>로그인 하러가기</Button>
                            </>}
                    </>}


            </LoginWrap>
        </HeaderWrap >
    )
}

export default Header