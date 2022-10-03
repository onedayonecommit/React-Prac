import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../com'

const Main = ({ logincheck }) => {

    return (
        <div>
            <Nav />
            <Link to="/login"><button>로그인 하러가기</button></Link>
        </div>
    )
}

export default Main