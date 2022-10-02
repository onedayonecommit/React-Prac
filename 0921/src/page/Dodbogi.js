import axios from 'axios'
import React, { useEffect } from 'react'
import { Nav } from '../com'

const Dodbogi = () => {
    useEffect(() => {
        async function User12() {
            await axios.get("http://localhost:80/asd123").then((e) => {
                console.log(e)
            }).catch((error) => {
                console.log(error)
            })
        }
        User12()
    }, [])
    return (
        <div>
            <Nav />
            Dodbogi</div>
    )
}

export default Dodbogi