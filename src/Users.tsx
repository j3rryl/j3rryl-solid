import { Show, createResource } from "solid-js";
import { UserModel } from "./UserModel";
import UserList from "./UserList";
const fetchUsers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const json = await res.json();
  return json.users;
};
export const Users = () => {
  const [users] = createResource(fetchUsers);
  return (
    <>
      <div>
        <h1>My Users</h1>
        {/* <pre>{JSON.stringify(users(), null, 2)}</pre> */}

        <Show when={users()} fallback={<p>Loading...</p>}>
          <UserList users={users() as UserModel[]} />
        </Show>
      </div>
    </>
  );
};
