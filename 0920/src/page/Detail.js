import React, { useState } from "react";
import { Header } from "../com";
import { Link, useParams, useSearchParams, useLocation } from "react-router-dom";
// 파라미터 값을 가져오기 위한 방법
// 리액트에서 지원주는 유용한 함수  == 리액트 훅
// useParams 사용
// url 경로에 있는 파라미터들을 객체 형태로 불러올 수 있음
// useParams함술를 실행해주고 반환된 객체를 가지고 동작

// 검색하는 방법
// 검색 쿼리문도 가져오자 ?= ~~~
// 검색 위해 input 만들기
// 입력했을 때 값을 저장해 두기 위해 리액트 값 저장 == useState 로 들고있기
// 검색 쿼리문을 만들어보기
// useSearchParams 이 함수를 사용.
// useSearchParams 이 함수를 실행해서 반환받은 객체 사용
// useSearchParams가 경로에서 뽑아주는 영역은
// ?뒤에 키값을 기준으로
// ?q=1 이런 형태는 {q:1}로 나옴

// 현재 경로를 가져와서 사용해야 하는데 useLocation 함수 사용
const Detail = () => {
    const [serch, setSerch] = useState("");
    // const { id, num, name } = useParams();
    const params = useParams();
    const location = useLocation();
    const [query, setQuery] = useSearchParams();
    console.log(location);
    console.log(query.get("q"));
    const keyInput = (e) => {
        setSerch(e.target.value);
    };
    return (
        <div>
            <Header title="상세 페이지" />
            <div>{serch}</div>
            <div>너 이거 검색함 : {query.get("q")}</div>
            <input onChange={keyInput} />
            <Link to={location.pathname + "?q=" + serch}>검색하기</Link>
            {/* <Body path="/" name="메인 페이지" item={params} /> */}
        </div>
    );
};

export default Detail;
