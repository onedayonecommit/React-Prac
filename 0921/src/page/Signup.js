import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Footer, Nav } from '../com'

const Signup = () => {
    const [values, setValues] = useState({
        idinput: "",
        pwinput: "",
    })
    const [user, setUser] = useState([]);
    const [usercheck, setUsercheck] = useState(false);
    const onChangeWriting = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name)
        console.log(values)
    };
    const sendPost = () => {
        axios.post("http://localhost:3001/member", {
            "user_id": values.idinput,
            "pw": values.pwinput,
        })
    }
    useEffect(() => {
        async function Board() {
            await axios.get("http://localhost:3001/member").then((e) => {
                setUser(e.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        Board();
    }, [])
    useEffect(() => {
        console.log(user)
    }, [user])

    function idcheck() {
        for (let i = 0; i < user.length; i++) {
            if (user[i].user_id === values.idinput) {
                setUsercheck(true)
                alert("중복 된 id입니다.")
                break
            }
        }
        if (usercheck === false) {
            alert("회원가입 성공")
            sendPost()
        }
    }
    return (
        <div className='Signin-body'>
            <Nav />
            <h1 className='login-header'>Apple ID가 없는 경우 회원가입 하세요.</h1>
            <div className='login-body'>
                <div className='login-body-loginment'>Apple에 회원가입 하세요</div>
                <div className='login-body-input-checkbox'><input className='login-id-input' placeholder='Apple ID' name='idinput' onChange={onChangeWriting} /><input type={"password"} className='login-id-input' placeholder='Apple P/W' name='pwinput' onChange={onChangeWriting} />
                    <button className='login-btn' onClick={idcheck}>회원가입</button>
                    <label className='checkbox'><input type={'checkbox'} className='checkbox-input'></input>약관 동의</label></div>
                <div className='forgot-apple-id'><Link to='/search/appleid' className='forgot-apple-id-atag'>Apple ID 또는 암호를 잊으셨습니까?</Link></div>
                <div>Apple ID가 있습니까?<Link to='/login' className='forgot-apple-id-atag'> 지금 로그인 하세요</Link></div>
                <Footer />
            </div>
        </div>
    )
}

export default Signup