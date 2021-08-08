import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
// import { UserProfile } from "./UserProfile";
import { UserCard } from "./components/UserCard";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfiles";

export default function App() {
  // const [todos, setTodos] = useState<Array<TodoType>>([]); //stateに対しての型指定はhooksの後ろに書く。

  // const User: UserProfile = {
  //   id: 1,
  //   name: "puppy",
  //   email: "test@test.com",
  //   address: "Address"
  //   // hobbies: ["game", "programming"]
  // };
  const onClickFetchData = () => {};

  return (
    <div className="App">
      <button onClick={onClickFetchData}>Fetch</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Failed fetching data</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard user={user} />
          ))}
        </>
      )}

      {/* <UserProfile user={user} /> */}
      {/* <Text color="red" fontSize="30px" /> */}
      {/* {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))} */}
    </div>
  );
}
