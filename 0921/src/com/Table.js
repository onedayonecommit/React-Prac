import React from 'react'

const Table = (props) => {
    for (let i = 0; i < props.writing.length; i++) {
        console.log(props.writing[i])
    }
    // function hi123() {
    //     var hiarr = [];
    //     for (let i = 0; i < 10; i++) {
    //         hiarr.push(<div>hihi</div>)
    //     }
    //     return hiarr
    // }
    var listing = [];
    function listingfunc() {

        for (let i = 0; i < props.writing[0].length; i++) { // 얘가 무조건 4개 props.writing[4]
            listing.push(<tr></tr>)
            for (let j = 0; j < 3; j++) { // 얘 길이는 글의 갯수 5
                listing.push(<td>{props.writing[j][i]}</td>) //
            }
        }
        return listing;
    }

    return (
        <table>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            {listingfunc()}
        </table>
    )
}

export default Table