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
  const [userProfiles, setUserProfiles] = useState<Array<UserProfile>>([]);
  const User: UserProfile = {
    id: 1,
    name: "puppy",
    email: "test@test.com",
    address: "Address"
    // hobbies: ["game", "programming"]
  };
  const onClickFetchData = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          address: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      });
  };

  return (
    <div className="App">
      {userProfiles.map((user) => (
        <UserCard user={user} />
      ))}

      {/* <UserProfile user={user} /> */}
      <button onClick={onClickFetchData}>Fetch</button>
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
