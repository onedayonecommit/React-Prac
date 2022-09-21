import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Body = (props) => {
    // Link 는 리액트에서 a같은 역할
    // Link 컴포넌트를 이용해서 경로를 바꿔주고 컴포넌트를 교체해서 보여줌
    // 라우터간의 이동을 할 수 있게 도와준다.
    // Link에 필요한 props는 to 어디
    // to이름의 props에 경로를 넣어준다.

    // useNavigate 똑같이 페이지 이동을 도와주는 아이
    // useNavigate 사용방법은 함수 실행 이후 반환받은 객체로 사용 함
    const nav = useNavigate();
    return (
        <div className='body'>
            <Link to={props.path}>
                {props.name}로 이동
            </Link>
            <button onClick={() => { nav(props.path) }}>이건 {props.name}로 이동 버튼 케케케</button>
            {props.item && props.item.id ? <div>{props.item.id}번</div> : null}
            {props.item && props.item.num ? <div>{props.item.num}번</div> : null}
            {props.item && props.item.name ? <div>{props.item.name}번</div> : null}
            {props.islogin ? <div>로그인되었음</div> : <div>not login</div>}
        </div>
    )
}

export default Body