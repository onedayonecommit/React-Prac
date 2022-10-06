// axios 
// axios 는 브라우저
// 자바스크립트에 fetch가 있는데 프레임워크에선 ajax를 구현할 때
// axios를 쓰는편이다. 속성은 url 필수고 나머지는 전달을 안해도 상관X
// method는 지정안하면 디폴트가 GET

import axios from "axios"

function getWeather(name) {
    // thunk가 해주는 일이 Action Createors라는 함수를 만들어 주는 것.
    // Action Createors 함수는 함수를 반환한다.
    // thunk는 dispatch를 딜레이 시켜주는 역할

    // action 함수는 함수를 반환한다.
    // dispatch랑 getState 둘다 함수다.
    return async (dispatch, getState) => {
        const data = await axios({
            url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=b4e7c6761d3b319562f4b93458ea437d`
        })
        console.log(getState());
        dispatch({ type: "GET_WEATHER_DATA", payload: data })
        console.log(getState());
    }
}
console.log(getWeather)
export const weather = { getWeather }