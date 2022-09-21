import React from 'react'

function Header(props) { // 바로 키값만 뽑을거면 파라미터를 {title}로 변환
    return (
        <div className='header'>{props.title}</div>
    )
}

export default Header