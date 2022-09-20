import React from 'react'

const Block = (props) => {
    console.log(props)
    let { data, test, name } = props
    return (
        <div>
            {/* 선택한 이미지를 props 값으로 받아온다. 부모 컴포넌트에서 */}
            {/* 리액트에서 제일 많이 쓰는 문법중 하나 값이 있으면 그려랴 라는 구문 && */}
            {/* 값이 없으면 오류를 뱉기 때문에 */}
            <div>{name}</div>
            <img src={data && data.img} />
            <div>{test}</div>
        </div>

    )
}

export default Block