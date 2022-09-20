import React, { useEffect, useState } from 'react'

const BlockFn = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);

    // useEffect 얘가 생명주기 함수를 사용할 수 있게 함수형에서도
    // 리액트에서 지원해주는 유용한 함수 (react hock) 리액트 훅

    // 빈 배열은 componentDidMount 라는 것
    useEffect(() => {
        // 여기에서 데이터를 불러와서 UI에 뿌려준다.
        console.log("componentDidMount")
    }, [])


    // componentDidUpdate는 어떻게 만드나
    // num 값을 주시하고 있다. 주시하는 값이 바뀌면 실행하는 함수
    // 배열안에 값을 추가한 값을 주시하다 바뀌면 실행된다.
    // 이게 componentDidMount + componentDidUpdate
    // 그래서 조건문을 줘서 처리해야 함
    useEffect(() => {
        console.log("componentdidUpdate")
        console.log(num)
    }, [num, num2])

    const add = () => {
        setNum(num + 1);
    }
    return (
        <div>
            <button onClick={add}>증가</button>
        </div>
    )
}

export default BlockFn