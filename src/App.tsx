import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]); //stateに対しての型指定はhooksの後ろに書く。
  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      });
  };

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch</button>
      {todos.map((todo) => (
        <Todo title={todo.title} userid={todo.userId} />
      ))}
    </div>
  );
}
