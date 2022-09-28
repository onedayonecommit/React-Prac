import React, { useEffect, useState } from 'react'
import { Nav } from '../com'
import axios from 'axios'
const Freeboard = (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        async function User() {
            let data = await axios.get("http://localhost:3001/member").then((e) => {
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
    return (
        <div>
            <Nav />
            {user && user[0].id}
        </div>
    )
}

export default Freeboard