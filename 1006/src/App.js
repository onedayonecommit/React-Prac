import axios from 'axios';
import { useDispatch } from 'react-redux';
import './App.css';

axios({
  url: "naver.com",
  method: "post",
  data: {
    // 넘겨줄 값을 넣어줌
  }
})

function App() {
  const dispatch = useDispatch();
  async function getWeather() {
    const data = await axios.get("https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=b4e7c6761d3b319562f4b93458ea437d")
    console.log(data)
    return data
  }
  getWeather()
  return (
    <div className="App">

    </div>
  );
}

export default App;
