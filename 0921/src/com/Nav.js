import React from 'react'

function Nav() {
    return (
        <div className='navigation'>
            <div className='loggo nav-item'>🍎</div>
            <div className='nav-item'>스토어</div>
            <div className='nav-item'>Mac</div>
            <div className='nav-item'>iPad</div>
            <div className='nav-item'>iPhone</div>
            <div className='nav-item'>Watch</div>
            <div className='nav-item'>Airpods</div>
            <div className='nav-item'>Tv 및 홈</div>
            <div className='nav-item'>Apple 독점 제공</div>
            <div className='nav-item'>액세서리</div>
            <div className='nav-item'>고객지원</div>
            <div className='nav-item'>고객지원</div>
            <div className='nav-item'><img src={require("../image/dot2.png")} className='nav-img' /></div>
            <div className='nav-item'><img src={require("../image/bag.png")} className='nav-img' /></div>
        </div>
    )
}

export default Nav