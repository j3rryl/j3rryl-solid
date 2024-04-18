import { Component, For } from "solid-js";
import { UserModel } from "./UserModel";

const UserList: Component<{ users: UserModel[] }> = (props) => {
  return (
    <div class="mx-5">
      <For each={props.users}>
        {(user) => (
          <li>{`${user.firstName} ${user.lastName}: ${user.email}`}</li>
        )}
      </For>
    </div>
  );
};

export default UserList;
