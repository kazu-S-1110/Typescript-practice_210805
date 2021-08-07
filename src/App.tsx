import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./User";

export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]); //stateに対しての型指定はhooksの後ろに書く。
  const user: User = {
    name: "puppy"
    // hobbies: ["game", "programming"]
  };
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
      <UserProfile user={user} />
      <button onClick={onClickFetchData}>Fetch</button>
      <Text color="red" fontSize="30px" />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
