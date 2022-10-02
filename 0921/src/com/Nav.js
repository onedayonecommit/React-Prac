import React from 'react'

function Nav() {
    return (
        <div className='navigation'>
            <a href='/' className='nav-item loggo'><div className='lo n'>🍎</div></a>
            <a href='/store' className='nav-item'><div className='n'>스토어</div></a>
            <a href='/store/Mac' className='nav-item'><div className='n'>Mac</div></a>
            <a href='/store/iPad' className='nav-item'><div className='n'>iPad</div></a>
            <a href='/store/iPhone' className='nav-item'><div className='n'>iPhone</div></a>
            <a href='/store/Watch' className='nav-item'><div className='n'>Watch</div></a>
            <a href='/store/Airpods' className='nav-item'><div className='n'>Airpods</div></a>
            <a href='/store/TV' className='nav-item'><div className='n'>TV 및 홈</div></a>
            <a href='/dokjum' className='nav-item'><div className='n'>Apple 독점 제공</div></a>
            <a href='/store/accessory' className='nav-item'><div className='n'>액세서리</div></a>
            <a href='/kogaekjiwon' className='nav-item'><div className='n'>고객지원</div></a>
            <a href='/board' className='nav-item'><div className='n'>게시판</div></a>
            <a href='/dodbogi' className='nav-item'><div className='n'><img src={require("../image/dot2.png")} className='nav-img' /></div></a>
            <a href='/jangbaguni' className='nav-item'><div className='n'><img src={require("../image/bag.png")} className='nav-img' /></div></a>
            <a href='/login' className='nav-item'><div className='n'><img src={require("../image/key.png")} className='nav-img' /></div></a>
        </div>
        
    )
}

export default Nav