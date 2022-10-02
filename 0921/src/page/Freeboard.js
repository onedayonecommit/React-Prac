import React, { createElement, useEffect, useState } from 'react'
import { Nav } from '../com'
import axios from 'axios'
const Freeboard = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function User() {
            await axios.get("http://localhost:3001/member").then((e) => {
                setUser(e.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        User();
    }, [])
    useEffect(() => {
        console.log(user)
    }, [user])
    // const tablemaker = () => {
    //     for (let i = 0; i < user.length; i++) {
    //         <tr>
    //             <td className={i}>{user[i].id}</td>
    //             <td className={i}>{user[i].user_id}</td>
    //             <td className={i}>{user[i].pw}</td>
    //         </tr>
    //     }
    // }
    return (
        <div>
            <Nav />
            <div className='table-box'>
                <table className='posting-box'>
                    <tr>
                        <div className='write-number'>1</div>
                        <div className='write-number'>2</div>
                        <div className='write-number'>3</div>
                        <div className='write-number'>4</div>
                        <div className='write-number'>5</div>
                    </tr>
                </table>
            </div>
            <div className='writing-btn'>
                <button>글쓰기</button>
            </div>
        </div>
    )
}

export default Freeboard