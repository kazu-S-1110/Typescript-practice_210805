import { VFC } from "react";
import { User } from "./User";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <dt>hobby</dt>
      {/* オプショナルのhobbiesがnullの場合、エラーを吐かれてしまう。 */}
      {/* それを防ぐべく下の式にも?をつける */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
