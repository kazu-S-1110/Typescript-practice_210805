import { VFC } from "react";
import { TodoType } from "./types/todo";

//Pickを使って既存の型を抜き出す手法あり。
// export const Todo: VFC<Pick<TodoType, "title" | "userId" | "completed">> = ({
//Omit（除外する）を使う方法もあり。
export const Todo: VFC<Omit<TodoType, "id">> = ({
  title,
  userId,
  completed = false
}) => {
  return (
    <>
      <p>
        {`${title}(ユーザid:${userId})`}
        <input type="checkbox" name="complete" defaultChecked={completed} />
      </p>
    </>
  );
};
