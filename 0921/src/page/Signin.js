import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Footer, Nav } from '../com'

const Signin = ({ logincheck, setLogincheck, setLoginid, loginid }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const [values, setValues] = useState({
        idinput: "",
        pwinput: "",
    })

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

    const onChangeWriting = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name)
        console.log(values)
    };


    function loginidcheck() {
        for (let i = 0; i < user.length; i++) {
            if (user[i].user_id === values.idinput && user[i].pw === values.pwinput) {
                setLogincheck(true)
                alert("로그인 성공")
                setLoginid(user[i].user_id)
                return navigate("/")
            }
        } alert('id/pw 확인 바람')
    }

    return (
        <div className='Signin-body'>
            <Nav />
            <h1 className='login-header'>더욱 빠르게 결제 하시려면 로그인 하세요.</h1>
            <div className='login-body'>
                <div className='login-body-loginment'>Apple Store에 로그인하세요</div>
                <div className='login-body-input-checkbox'><input className='login-id-input' placeholder='Apple ID' name='idinput' onChange={onChangeWriting} /><input className='login-id-input' placeholder='Apple P/W' name='pwinput' onChange={onChangeWriting} />
                    <button className='login-btn' onClick={loginidcheck}>로그인</button>
                    <label className='checkbox'><input type={'checkbox'} className='checkbox-input'></input>아이디 저장</label></div>
                <div className='forgot-apple-id'><Link to='/search/appleid' className='forgot-apple-id-atag'>Apple ID 또는 암호를 잊으셨습니까?</Link></div>
                <div>Apple ID가 없으십니까?<Link to='/signup' className='forgot-apple-id-atag'> 지금 만드세요</Link></div>
                <Footer />
            </div>
        </div>
    )
}

export default Signin