import { VFC } from "react";

type PropType = {
  userId: number;
  title: string;
  completed?: boolean; //?をつけることでオプショナルとなる
};

export const Todo: VFC<PropType> = ({ title, userId, completed = false }) => {
  return (
    <>
      <p>
        {`${title}(ユーザid:${userId})`}
        <input type="checkbox" name="complete" defaultChecked={completed} />
      </p>
    </>
  );
};
