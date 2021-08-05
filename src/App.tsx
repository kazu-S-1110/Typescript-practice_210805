import "./styles.css";
import axios from "axios";

export default function App() {
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch</button>
    </div>
  );
}
