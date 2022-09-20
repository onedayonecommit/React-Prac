import './App.css';
import { img1, img2, img3 } from './img/index'
import Block from './Block';
import { useState } from 'react';
function App() {
  // 간단한 가위바위보
  // 플레이어 영역 하나 컴퓨터 영역 하나
  const select = {
    scssiors: {
      name: '가위',
      img: img1
    },
    rock: {
      name: '바위',
      img: img2
    },
    paper: {
      name: '보',
      img: img3
    }
  }

  // 유저가 선택한 값을 담아두고 주시해야 함 선택하면
  // 데이터가 바뀌어서 다시 그려줘야 하기 때문에.(이미지가 변해야 함)
  // 유저의 선택 값을 담을 useState
  const [userSelect, setUserSelect] = useState(null);
  // 컴퓨터의 선택 값을 담을 useState
  const [comSelect, setcomSelect] = useState(null);
  // 승패 결과를 담아줄 useState
  const [result, setResult] = useState('');

  // 컴퓨터는 버튼이 없음 유저가 선택하면 얘는 랜덤으로 값이 전달되어야 함
  // Mathrandom() 랜덤값을 받아오며
  // 받아온 값으로 위에 만든 객체에서 값을 가져와야 하는데
  // 객체에서 키값만 뽑아서 배열로 만들자
  // let arr = Object.keys(select) 함수로 반환해주면
  // arr 변수 안에 키값만 뽑아서 배열로 받아준다.
  function userClick(temp) {
    setUserSelect(select[temp])
    let arr = Object.keys(select); // select 배열의 키값만 뽑아서 배열에 집어넣음 [scssiors,rock,paper]
    let comRandom = Math.floor(Math.random() * 3)
    setcomSelect(select[arr[comRandom]])
    // 결과를 가지고 승패를 보여준다.
    let player = select[temp];
    let computer = select[arr[comRandom]];
    if (player.name == computer.name) {
      console.log(player.name, "1231313", computer.name)
      setResult("무승부")
    } else if (player.name == "가위") {
      console.log(player.name, "1231313", computer.name)
      let temp = computer.name == "보" ? "이겼다" : "졌다"
      setResult(temp);
    } else if (player.name == "바위") {
      console.log(player.name, "1231313", computer.name)
      let temp = computer.name == "가위" ? "이겼다" : "졌다"
      setResult(temp)
    } else if (player.name == "보") {
      console.log(player.name, "1231313", computer.name)
      let temp = computer.name == "바위" ? "이겼다" : "졌다"
      setResult(temp);
    }
  }
  // 1. 우리가 만들어놓은 객체의 값이 필요하기 때문에 userClick 함수를 만들었고
  // 그 값을 저장해주는 UserSelect변수를 useState함수를 통해서 만들었다.

  // 2. 버튼을 클릭했을 때 그 함수가 실행이 되고 state값이 변하기 때문에 다시
  // 리 렌더링 된다. 부모가 리 렌더링 됐으니 자식 컴포넌트도 리 렌더링 된다.

  // Block에 우리는 userClick을 실행하고 setUserSelect함수로 변경한 userSelect값을 props로 넘겨줌
  // Block에서는 props로 넘겨받은 값을 사용해서 img의 경로를 받아서 이미지를 보여줬다. 
  // How? 부모가 리 렌더링 됐기 때문에 자식도 변한 값이 리렌더링 된 것.
  return (
    <div>
      <div className="App">
        <Block data={userSelect} name="user" test={result} />
        <Block data={comSelect} name="com" />

      </div>
      <div>
        <button onClick={() => { userClick('scssiors') }}>가위</button>
        <button onClick={() => { userClick('rock') }}>바위</button>
        <button onClick={() => { userClick('paper') }}>보</button>
      </div>
    </div>
  );
}

export default App;