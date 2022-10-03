import axios from 'axios'
import React, { useState } from 'react'
import { Nav } from '../com'

const Writing = ({ user_id, }) => {
    console.log(user_id)
    const [values, setValues] = useState({
        titleinput: "",
        contentarea: "",
    })
    const onChangeWriting = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
        console.log(e.target.name)
        console.log(values)
    };

    const sendPost = () => {
        axios.post("http://localhost:3001/board", {
            "title": values.titleinput,
            "content": values.contentarea,
            "user_id": user_id
        })
        alert("글 작성 완료")
        values.titleinput = ""
        values.contentarea = ""
    }

    return (
        <div>
            <Nav />
            <div className='writing-body'>
                <div className='title-div'><input className='title-input' id='titleinput' name='titleinput'
                    onChange={onChangeWriting}
                /></div>
                <textarea className='content-textarea' id='contentarea' name='contentarea'
                    onChange={onChangeWriting}
                />
                <button className='regist-content' onClick={sendPost}>작성</button>
            </div>
        </div>
    )
}

export default Writing