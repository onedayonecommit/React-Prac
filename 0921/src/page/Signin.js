import React from 'react'
import { Footer, Nav } from '../com'

const Signin = () => {
    return (
        <div className='Signin-body'>
            <Nav />
            <h1 className='login-header'>더욱 빠르게 결제 하시려면 로그인 하세요.</h1>
            <div className='login-body'>
                <div className='login-body-loginment'>Apple Store에 로그인하세요</div>
                <div className='login-body-input-checkbox'><input className='login-id-input' placeholder='Apple ID' /><input className='login-id-input' placeholder='Apple P/W' />
                    <button className='login-btn'>로그인</button>
                    <label className='checkbox'><input type={'checkbox'} className='checkbox-input'></input>아이디 저장</label></div>
                <div className='forgot-apple-id'><a href='/search/appleid' className='forgot-apple-id-atag'>Apple ID 또는 암호를 잊으셨습니까?</a></div>
                <div>Apple ID가 없으십니까?<a href='/signup' className='forgot-apple-id-atag'> 지금 만드세요</a></div>
                <Footer />
            </div>
        </div>
    )
}

export default Signin