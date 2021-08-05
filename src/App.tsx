import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";

export default function App() {
  const [todos, setTodos] = useState<any>([]); //stateに対しての型指定はhooksの後ろに書く。
  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res.data);
      setTodos(res.data);
    });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userid} />
      ))}
    </div>
  );
}
