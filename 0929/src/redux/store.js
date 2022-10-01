import { createStore } from "redux";
import reducer from './reducer'
// createStore는 저장소를 만들어준다.

// createStore의 매개 변수로는 reducer 리듀서를 전달 해준다. 

// 순서
// 저장소를 리듀서에 추가해서 저장소를 만들고 저장소를 Provider로 적용시키고
// App 컴포넌트에 적용시키는 구조

// 저장소를 만들어보자

let store = createStore(reducer)

export default store