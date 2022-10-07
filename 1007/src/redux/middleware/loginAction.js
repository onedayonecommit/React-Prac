import axios from "axios";

function login(id, pw) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post", url: "http://localhost:80/login", data: {
                id: id,
                pw: pw
            }
        })
        console.log(user.data)
        if (user.data) {
            dispatch({ type: "LOGIN", payload: { id, pw } })
        }
        else alert("없는 아이디 입니다.")
    }
}

function logOut() {
    return (dispatch, getState) => {
        console.log(getState().loginReducer)
        if (getState().loginReducer.isLogin) {
            dispatch({ type: "LOGOUT" })
        }
    }
}

function signUp(id, pw, setWrap) {
    return async (dispatch, getState) => {
        const user = await axios({
            method: "post",
            url: "http://localhost:80/signup", data: {
                id, pw
            }
        })
        console.log(user)
        alert(user.data)
        if (user.data === "Sign_up_success") {
            setWrap();
        }
    }
}

export const loginAction = { login, signUp, logOut }