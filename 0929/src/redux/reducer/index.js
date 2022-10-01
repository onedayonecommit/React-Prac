// reducer 함수를 만들어보자...
// reducer 함수를 만드는데 필요한 매개변수는
// 두가지가 있음

// state와 action을 매개변수로
let init = {
    count: 0,
}

/** state = init 초기값을 전달해준다. */
function reducer(state = init, action) {
    // 이곳에 동작할 기능들을 작성해준다.
    switch (action.type) {
        case "ADD":
            console.log("플러스")
            // 리듀서가 저장소의 값을 변경 해주는데 이 반환값을 받아서 바꿔주는 것이기 때문에
            // 저장소는 항상 대기하다가 리듀서가 return 값을 주면 적용을 바로 시켜준다.
            // ...state처럼 ... 을 붙히는 이유는 객체에 여러 값이 있을 수 있는데 값을 그대로 유지하고 count만
            // 바꾸려하는 이유와 저장소가 변했다고 인지하는 경우가 새로운 주소의 객체가 전달되었을 때
            // 값을 복사해서 새로운 주소 할당하여 공간을 배정
            return { ...state, count: state.count + 1 }
        case "REMOVE":
            console.log("마이너스");
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

export default reducer;