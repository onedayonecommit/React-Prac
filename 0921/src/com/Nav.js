import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='navigation'>
            <Link to="/" className='nav-item loggo'><div className='lo n'>π</div></Link>
            <Link to='/store' className='nav-item'><div className='n'>μ€ν μ΄</div></Link>
            <Link to='/store/Mac' className='nav-item'><div className='n'>Mac</div></Link>
            <Link to='/store/iPad' className='nav-item'><div className='n'>iPad</div></Link>
            <Link to='/store/iPhone' className='nav-item'><div className='n'>iPhone</div></Link>
            <Link to='/store/Watch' className='nav-item'><div className='n'>Watch</div></Link>
            <Link to='/store/Airpods' className='nav-item'><div className='n'>Airpods</div></Link>
            <Link to='/store/TV' className='nav-item'><div className='n'>TV λ° ν</div></Link>
            <Link to='/dokjum' className='nav-item'><div className='n'>Apple λμ  μ κ³΅</div></Link>
            <Link to='/store/accessory' className='nav-item'><div className='n'>μ‘μΈμλ¦¬</div></Link>
            <Link to='/mypage' className='nav-item'><div className='n'>Mypage</div></Link>
            <Link to='/board' className='nav-item'><div className='n'>κ²μν</div></Link>
            <Link to='/dodbogi' className='nav-item'><div className='n'><img src={require("../image/dot2.png")} className='nav-img' /></div></Link>
            <Link to='/jangbaguni' className='nav-item'><div className='n'><img src={require("../image/bag.png")} className='nav-img' /></div></Link>
            <Link to='/login' className='nav-item'><div className='n'><img src={require("../image/key.png")} className='nav-img' /></div></Link>
        </div>

    )
}

export default Nav