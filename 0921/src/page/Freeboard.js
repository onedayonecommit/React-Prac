import React, { useEffect, useState } from 'react'
import { Nav, Table } from '../com'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Freeboard = (props) => {
    // const [user, setUser] = useState([]);
    const [board, setBoard] = useState([]);
    useEffect(() => {
        async function Board() {
            await axios.get("http://localhost:3001/board").then((e) => {
                setBoard(e.data)
            }).catch((error) => {
                console.log(error)
            })
        }
        Board();
    }, [])
    useEffect(() => {
        console.log(board)
    }, [board])
    function writing1() {
        var titlearr = [];
        var contentarr = [];
        var useridarr = [];
        var wnoarr = [];
        for (let i = 0; i < board.length; i++) {
            titlearr.push(<tr className='writing-title'>{board[i].title}</tr>)
            contentarr.push(<tr className='writing-content'>{board[i].content}</tr>)
            useridarr.push(<tr className='writing-userid'>{board[i].user_id}</tr>)
            wnoarr.push(<tr className='writing-number'>{board[i].id}</tr>)
        }
        return (
            [
                wnoarr,
                titlearr,
                useridarr,
                contentarr,
            ]
        )
    }
    console.log(writing1())
    return (
        <div>
            <Nav />
            <div className='table-box'>
                <Table writing={writing1()} />
            </div>
            <div className='writing-btn'>
                <Link to='/freeboard/create'><button>글쓰기</button></Link>
            </div>
        </div>
    )
}

export default Freeboard